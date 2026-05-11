// Iconos SVG inline trazo fino — sin librerías externas
const Icon = ({ name, size = 22, ...rest }) => {
  const s = size;
  const common = { width: s, height: s, viewBox: "0 0 24 24", className: "mst-icon", ...rest };
  switch (name) {
    case "exit":
      return <svg {...common}><path d="M15 4h-9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9"/><path d="M10 12h11"/><path d="m17 8 4 4-4 4"/></svg>;
    case "back":
      return <svg {...common}><path d="m15 18-6-6 6-6"/></svg>;
    case "next":
      return <svg {...common}><path d="m9 18 6-6-6-6"/></svg>;
    case "play":
      return <svg {...common}><path d="m6 4 14 8-14 8z"/></svg>;
    case "skull":
      return <svg {...common}><path d="M12 3a8 8 0 0 0-8 8v3l2 2v3h3v-2h2v2h2v-2h2v2h3v-3l2-2v-3a8 8 0 0 0-8-8Z"/><circle cx="9" cy="12" r="1.4" fill="currentColor"/><circle cx="15" cy="12" r="1.4" fill="currentColor"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/></svg>;
    case "heart":
      return <svg {...common}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg>;
    case "swords":
      return <svg {...common}><path d="m4 20 6-6"/><path d="m14.5 14.5 5.5 5.5"/><path d="M14 4h6v6"/><path d="M20 4 4 20"/><path d="M4 14v6h6"/></svg>;
    case "list":
      return <svg {...common}><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><circle cx="3.5" cy="6" r="1" fill="currentColor"/><circle cx="3.5" cy="12" r="1" fill="currentColor"/><circle cx="3.5" cy="18" r="1" fill="currentColor"/></svg>;
    case "initiative":
      // Hourglass crossed by a sword — "el orden del turno"
      return <svg {...common}>
        <path d="M6 3h12"/>
        <path d="M6 21h12"/>
        <path d="M7 3v3l4 5v2l-4 5v3"/>
        <path d="M17 3v3l-4 5v2l4 5v3"/>
        <path d="m3 21 18-18" strokeWidth="1.6" opacity=".55"/>
      </svg>;
    case "book":
      return <svg {...common}><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3Z"/><path d="M5 17h14"/></svg>;
    case "cog":
      return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>;
    case "plus":
      return <svg {...common}><path d="M12 5v14"/><path d="M5 12h14"/></svg>;
    case "target":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><path d="M12 1v3"/><path d="M12 20v3"/><path d="M1 12h3"/><path d="M20 12h3"/></svg>;
    case "minus":
      return <svg {...common}><path d="M5 12h14"/></svg>;
    case "dice":
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/><circle cx="9" cy="15" r="1" fill="currentColor"/></svg>;
    case "map":
      return <svg {...common}><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>;
    case "eye":
      return <svg {...common}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "pen":
      return <svg {...common}><path d="m15 4 5 5L9 20H4v-5Z"/></svg>;
    case "search":
      return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
    case "more":
      return <svg {...common}><circle cx="5" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/></svg>;
    case "x":
      return <svg {...common}><path d="M6 6 18 18"/><path d="M18 6 6 18"/></svg>;
    case "rewind":
      return <svg {...common}><path d="m11 19-9-7 9-7Z"/><path d="m22 19-9-7 9-7Z"/></svg>;
    case "fast":
      return <svg {...common}><path d="m13 5 9 7-9 7Z"/><path d="m2 5 9 7-9 7Z"/></svg>;
    case "drag":
      return <svg {...common}><circle cx="9" cy="6" r="1.4" fill="currentColor"/><circle cx="15" cy="6" r="1.4" fill="currentColor"/><circle cx="9" cy="12" r="1.4" fill="currentColor"/><circle cx="15" cy="12" r="1.4" fill="currentColor"/><circle cx="9" cy="18" r="1.4" fill="currentColor"/><circle cx="15" cy="18" r="1.4" fill="currentColor"/></svg>;
    case "download":
      return <svg {...common}><path d="M12 4v12"/><path d="m6 12 6 6 6-6"/><path d="M4 20h16"/></svg>;
    case "upload":
      return <svg {...common}><path d="M12 20V8"/><path d="m6 12 6-6 6 6"/><path d="M4 4h16"/></svg>;
    case "copy":
      return <svg {...common}><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>;
    case "edit":
      return <svg {...common}><path d="M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="m18.5 2.5 3 3L12 15l-4 1 1-4Z"/></svg>;
    case "save":
      return <svg {...common}><path d="M5 4h11l4 4v12a0 0 0 0 1 0 0H5a0 0 0 0 1 0 0V4Z"/><path d="M8 4v5h8V4"/><path d="M8 14h8v6H8z"/></svg>;
    case "ruler":
      return <svg {...common}><path d="M3 17 17 3l4 4L7 21Z"/><path d="M7 11l2 2"/><path d="M10 8l2 2"/><path d="M13 5l2 2"/><path d="M4 14l2 2"/></svg>;
    case "circle":
      return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
    case "cone":
      return <svg {...common}><path d="M12 3 4 21h16Z"/></svg>;
    case "line":
      return <svg {...common}><path d="M4 20 20 4"/></svg>;
    /* #ANCHOR:MST-SQUARE-V1 — icono cuadrado para plantilla burst PF1e. 2026-05-11 */
    case "square":
      return <svg {...common}><rect x="4" y="4" width="16" height="16"/></svg>;
    case "fog":
      return <svg {...common}><path d="M3 10h18"/><path d="M5 14h14"/><path d="M7 18h10"/><path d="M5 6h12"/></svg>;
    case "image":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m4 18 5-5 4 4 3-3 4 4"/></svg>;
    case "note":
      return <svg {...common}><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4"/><path d="M8 12h8"/><path d="M8 16h6"/></svg>;
    case "save-disk":
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v6h8V4"/><rect x="8" y="14" width="8" height="6"/></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

window.MstIcon = Icon;

// =====================================================================
// TOKEN PORTRAIT — muestra foto si la hay, si no la inicial corta
// Acepta los mismos props básicos que se usan en map / drawer / list:
//   - token: objeto con {short, photo?, color}
//   - size: px
//   - className: clases extra (para tamaños/posicionado del contenedor)
// =====================================================================
function TokenPortrait({ token, size = 40, className = '', style = {} }) {
  const hasPhoto = token && typeof token.photo === 'string' && token.photo.length > 0;
  const baseStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
    background: token?.color || 'var(--accent)',
    display: 'grid',
    placeItems: 'center',
    flexShrink: 0,
    ...style,
  };
  if (hasPhoto) {
    return (
      <div className={"mst-portrait " + className} style={baseStyle}>
        <img
          src={token.photo}
          alt={token.name || ''}
          className="mst-portrait-img"
          draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }
  return (
    <div className={"mst-portrait " + className} style={baseStyle}>
      <span style={{
        fontFamily: 'Cinzel, Georgia, serif',
        fontWeight: 700,
        fontSize: Math.max(11, Math.round(size * 0.42)),
        color: '#fff',
        textShadow: '0 1px 2px rgba(0,0,0,.5)',
        lineHeight: 1,
        userSelect: 'none',
      }}>{token?.short || ''}</span>
    </div>
  );
}
window.TokenPortrait = TokenPortrait;
