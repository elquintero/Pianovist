# Lectura a primera vista (piano)

App web de una sola página (`index.html`) para practicar lectura a primera vista con un teclado MIDI, al estilo Flowkey.

## Funciones
- Carga de canciones en **MusicXML** (`.musicxml`, `.xml`, `.mxl`) y MIDI (`.mid`) desde ⚙ Ajustes.
- Conexión con teclado MIDI (Web MIDI: Chrome o Edge): selector arriba a la izquierda, con punto verde cuando hay teclado.
- Botones de mano: **izquierda**, **▶ / ■** y **derecha**. Solo izquierda → practicas la izquierda; solo derecha → la derecha; las dos → ambas; ninguna → ▶ reproduce la canción.
- Modo por defecto: **esperar mis notas** (en Ajustes también «con tempo»).
- Arrastra la partitura con el dedo o el ratón: las notas que pasa el cursor se marcan en verde. La barra naranja de abajo también sirve para moverte.
- Partitura con Bravura: armadura, compás, números de compás, ligaduras, voces, barras de corchea, cambios de clave, acordes con segundas, arpegios y calderones.
- Barra de abajo con botones de principio (⏮) y final (⏭) de la partitura.
- Piano real o sintetizador. Muestras en `Sound/<capa>/<nota>.mp3` (capa 2 = suave, 3 = media, 4 = fuerte; ej. `Sound/3/Cs4.mp3` = Do♯4), que se eligen según la fuerza con la que pulsas.
- Pantalla completa (Ajustes → Pantalla completa) y botón de play que se oculta mientras suena.
- En Ajustes: modo, oír la otra mano, metrónomo, cuenta atrás, sonido, volumen, tamaño de la partitura, estilo y fuente.

## Fuente Bravura
La partitura usa la fuente SMuFL **Bravura** (licencia SIL OFL, se puede redistribuir).
Colócala en **`fonts/Bravura.otf`** (fuente completa de https://github.com/steinbergmedia/bravura).

## Instalar en Android (PWA)
1. Publica el repositorio con GitHub Pages (ver abajo).
2. Abre la URL `https://TU_USUARIO.github.io/lectura-piano/` en **Chrome para Android**.
3. Menú ⋮ → **Instalar aplicación** (o «Añadir a la pantalla de inicio»).
4. Conecta el teclado por **USB (adaptador OTG)** antes de abrir la app y acepta el permiso MIDI.
Tras la primera carga funciona sin conexión. Si cambias la app, sube la versión de caché (`V` en `sw.js`, siempre con el prefijo `lectura-piano-`).

## Uso en local
Abre `index.html` en Chrome o Edge. Para servirla con un servidor local:

    python3 -m http.server 8000

y entra en http://localhost:8000

## Publicar en GitHub Pages
1. Sube el repositorio a GitHub (ver más abajo).
2. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
3. Cada `git push` a `main` publica la web (HTTPS, necesario para Web MIDI).

## Subir a GitHub
    ./iniciar-git.sh
    git remote add origin https://github.com/TU_USUARIO/lectura-piano.git
    git push -u origin main
