# Apply archetype level fixes from the 4 audit reports.
# Reads each report, extracts (archetype_key, feature_name_en, canonical_level)
# for every WRONG entry with a numeric canonical, then patches archetypes.json
# by adding `level: N` to each matching features_gained entry (matching by name_en).

$ErrorActionPreference = 'Stop'
$base = 'C:\Users\Lucia\Documents\otros\pathfinder-sheet'
$archPath = "$base\archetypes.json"
$reports = @(
    "$base\_audit\arch-report-1.md",
    "$base\_audit\arch-report-2.md",
    "$base\_audit\arch-report-3.md",
    "$base\_audit\arch-report-4.md"
)

# patches[archetypeKey] = @{ featureNameEn -> levelInt }
$patches = @{}
$skippedUnknown = 0
$skippedOK = 0
$parsedWrong = 0

foreach ($rep in $reports) {
    $currentArch = $null
    $repText = [System.IO.File]::ReadAllText($rep, (New-Object System.Text.UTF8Encoding($false)))
    $repText -split "`r?`n" | ForEach-Object {
        $line = $_
        # Heading: "## archetype_key <em-dash> Display Name (parent_class)".
        # Em-dash built via char code so the script source stays pure ASCII (PS 5.1
        # reads BOM-less .ps1 as Windows-1252 and would mangle a literal em-dash).
        $emdash = [char]0x2014
        if ($line -match ('^##\s+(\w+)\s+' + [regex]::Escape($emdash))) {
            $currentArch = $matches[1]
            return
        }
        if (-not $currentArch) { return }

        # Feature line: "- <Feature Name> | current: ... | canonical: <X> | <VERDICT> | <reason>"
        if ($line -match '^-\s+(.+?)\s+\|\s+current:\s+[^|]+\|\s+canonical:\s+([^|]+?)\s+\|\s+(\w+)') {
            $featName = $matches[1].Trim()
            $canonicalRaw = $matches[2].Trim()
            $verdict = $matches[3].ToUpper()

            if ($verdict -eq 'UNKNOWN') { $script:skippedUnknown++; return }
            if ($verdict -eq 'OK')      { $script:skippedOK++; return }

            # Parse canonical as int (accept "1", "1 (note)", "5", etc.)
            if ($canonicalRaw -match '^(\d+)') {
                $level = [int]$matches[1]
                if (-not $patches.ContainsKey($currentArch)) {
                    $patches[$currentArch] = @{}
                }
                # If multiple reports list the same feature, last write wins;
                # they shouldn't disagree because slices are disjoint.
                $patches[$currentArch][$featName] = $level
                $script:parsedWrong++
            } else {
                $script:skippedUnknown++
            }
        }
    }
}

Write-Host "Parsed WRONG entries with numeric canonical: $parsedWrong"
Write-Host "Skipped (UNKNOWN / non-numeric canonical):    $skippedUnknown"
Write-Host "Skipped (OK):                                 $skippedOK"
Write-Host "Archetypes with at least one patch:           $($patches.Keys.Count)"
Write-Host ""

# Load archetypes.json with strict UTF-8 (no BOM) via .NET I/O.
# Get-Content -Encoding UTF8 misreads files without BOM in PS 5.1 → mojibake on accents.
$archRaw = [System.IO.File]::ReadAllText($archPath, (New-Object System.Text.UTF8Encoding($false)))
$arch = $archRaw | ConvertFrom-Json

$applied = 0
$unmatched = New-Object System.Collections.ArrayList
$archMissing = New-Object System.Collections.ArrayList

foreach ($archKey in $patches.Keys) {
    if (-not $arch.PSObject.Properties.Name.Contains($archKey)) {
        [void]$archMissing.Add($archKey)
        continue
    }
    $obj = $arch.$archKey
    if (-not $obj.features_gained -or $obj.features_gained.Count -eq 0) {
        # Patches reference an archetype with no features_gained — odd but skip.
        continue
    }
    foreach ($featName in $patches[$archKey].Keys) {
        $level = $patches[$archKey][$featName]
        $found = $false
        foreach ($f in $obj.features_gained) {
            if ($f.name_en -eq $featName -or $f.name -eq $featName) {
                # Add or overwrite the level property
                if ($f.PSObject.Properties.Name -contains 'level') {
                    $f.level = $level
                } else {
                    $f | Add-Member -NotePropertyName 'level' -NotePropertyValue $level -Force
                }
                $found = $true
                $applied++
                break
            }
        }
        if (-not $found) {
            [void]$unmatched.Add("$archKey :: $featName")
        }
    }
}

Write-Host "Levels applied to features_gained: $applied"
Write-Host "Unmatched (feature not found in archetype): $($unmatched.Count)"
if ($unmatched.Count -gt 0 -and $unmatched.Count -le 80) {
    Write-Host "Unmatched details:"
    $unmatched | ForEach-Object { Write-Host "  - $_" }
} elseif ($unmatched.Count -gt 80) {
    Write-Host "Unmatched details (first 80):"
    $unmatched[0..79] | ForEach-Object { Write-Host "  - $_" }
}
if ($archMissing.Count -gt 0) {
    Write-Host "Archetype keys in reports but missing from JSON:"
    $archMissing | ForEach-Object { Write-Host "  - $_" }
}

# Serialize back to JSON. Use Depth 100 to preserve nested structures.
$out = $arch | ConvertTo-Json -Depth 100
# PowerShell's ConvertTo-Json escapes < > & by default; revert these for readability,
# matching the original style which had unescaped characters.
$out = $out -replace '\\u003c','<' -replace '\\u003e','>' -replace '\\u0026','&'

# Save with UTF-8 BOM to match the original file's encoding.
[System.IO.File]::WriteAllText($archPath, $out, (New-Object System.Text.UTF8Encoding($true)))
Write-Host ""
Write-Host "Wrote $archPath ($((Get-Item $archPath).Length) bytes)"
