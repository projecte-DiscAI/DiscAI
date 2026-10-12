# DiscAI — Web + APP

## Archivos de esta carpeta web
- `index.html` — página principal (agente-IA, selector de idioma, accesibilidad y descarga de la APP).
- `logo-discai.jpg` — logotipo (cabecera, imagen principal y favicon).
- `laura.jpg` — **foto de perfil de Laura. Debes añadirla tú con este nombre exacto.**

## Estructura recomendada del repositorio
```
DiscAI/
├── index.html
├── logo-discai.jpg
├── laura.jpg
└── app/                  ← aquí el proyecto de la APP (código fuente)
```

## Publicar la web
1. Sube `index.html`, `logo-discai.jpg` y `laura.jpg` a la **raíz** del repositorio.
2. Activa GitHub Pages: Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
3. La web quedará disponible en: https://projecte-discai.github.io/DiscAI/

## Publicar la APP Android
1. Genera el APK (p. ej. con Bubblewrap/TWA sobre esta misma web, o WebView en Android Studio).
2. Ve a Releases → Draft a new release → etiqueta `v1.0` → adjunta el archivo renombrado como `discai.apk` → Publish.
3. El botón «Descargar APP (Android)» de la web apunta automáticamente a:
   https://github.com/projecte-DiscAI/DiscAI/releases/latest/download/discai.apk

## APP iOS
Sin App Store, la web ofrece instalación como PWA: en Safari → Compartir → «Añadir a pantalla de inicio».
Para una APP nativa iOS haría falta cuenta de desarrollador de Apple (TestFlight/App Store).

## Agente-IA
El chat de la web se conecta al Worker de Cloudflare:
https://discai.francesc-jhernandez.workers.dev/
(envía { message, lang } por POST y espera { response }).

## Iconos de la APP (carpeta `icons/`)
Súbela **como carpeta completa** al repositorio (Add file → Upload files → arrastra los 14 archivos juntos; GitHub crea la carpeta automáticamente):
- `favicon.ico`, `favicon-32.png` — pestaña del navegador.
- `apple-touch-icon.png` (180×180) — icono al «Añadir a pantalla de inicio» en iPhone/iPad.
- `icon-192.png`, `icon-512.png` — iconos PWA estándar (ver `manifest.json`).
- `icon-maskable-192.png`, `icon-maskable-512.png` — variantes «maskable» (Android recorta en cualquier forma sin perder el robot).
- `ic_launcher-48/72/96/144/192.png` — set launcher Android (mdpi a xxxhdpi) para el proyecto nativo.
- `ic_launcher_foreground.png` (robot transparente) + `ic_launcher_background.png` (blanco) — icono adaptativo Android.

### Para generar el APK con Bubblewrap (recomendado)
```
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://projecte-discai.github.io/DiscAI/manifest.json
bubblewrap build
```
Cuando pida el icono, usa `icons/icon-512.png`. El APK resultante, renómbralo `discai.apk` y súbelo a Releases.
