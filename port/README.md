# Ficha Pathfinder — Port Android

Puerto de la web SPA a Android mediante WebView.

## Abrir en Android Studio

1. En Android Studio: **File → Open** → seleccionar esta carpeta `port/`
2. Esperar a que Gradle sincronice (puede tardar si descarga dependencias)
3. Pulsar **Run ▶** en un emulador o dispositivo conectado

## Sincronizar archivos web (cuando edites la web original)

Ejecutar desde `port/`:
```
sync-assets.bat
```
O copiar manualmente los ficheros de `../` a `app/src/main/assets/`.

## Estructura

```
port/
  app/src/main/
    java/com/pathfinder/sheet/
      MainActivity.kt       ← WebView + bridges JS↔Android
    assets/                 ← Copia de los ficheros web (index.html, *.json, *.css, *.js)
    res/
      layout/activity_main.xml
      values/themes.xml
      xml/file_paths.xml    ← Rutas para FileProvider (compartir JSON)
    AndroidManifest.xml
```

## Cómo funciona

- La WebView carga `file:///android_asset/index.html`
- `localStorage` funciona → los datos del personaje se persisten en la app
- Los JSON de base de datos se cargan con `fetch()` desde assets (misma ruta base)
- Si `fetch()` falla, `fallback-data.js` ya tiene los datos embebidos como constantes JS
- **Exportar ficha**: el bridge `AndroidBridge.saveJson()` abre el selector "Compartir como…"
- **Importar ficha**: el `input[type=file]` lanza el selector de archivos nativo del sistema

## Flujo guardar / cargar personajes

### Guardar
1. Pulsas **Exportar** en la web → el bridge intercepta el enlace `<a download>`
2. Aparece un diálogo nativo con el nombre del personaje prellenado
3. Confirmas → el JSON se guarda en `filesDir/characters/nombre.json` (privado, sin permisos)

### Cargar
1. Pulsas **Importar** en la web → el bridge intercepta el `input[type=file]`
2. Aparece un diálogo con la lista de personajes guardados (más reciente primero)
3. Pulsas un nombre → el JSON se inyecta en la web mediante `importData()`
4. Botón **×** en cada fila → elimina ese personaje (con confirmación)
5. Botón **Desde archivo externo** → abre el selector del sistema para importar JSON de otra fuente

Los personajes se guardan en almacenamiento interno de la app. No se necesitan permisos de almacenamiento.

## Bridge JS → Android

```javascript
// Detectar si estamos en Android
if (window.NativeApp?.isAndroid()) { ... }

// Toast nativo
AndroidBridge.showToast('Mensaje');
```

## Requisitos

- Android Studio Hedgehog (2023.1) o superior
- Android SDK 26+ (Android 8.0+)
- Kotlin 1.9+
