# SightKeys

Versión 1.1.9

App web de una sola página (`index.html`) para practicar lectura a primera vista de piano con un teclado MIDI, al estilo Flowkey.

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
2. Abre la URL `https://elquintero.github.io/SightKeys/` en **Chrome para Android**.
3. Menú ⋮ → **Instalar aplicación** (o «Añadir a la pantalla de inicio»).
4. Conecta el teclado por **USB (adaptador OTG)** antes de abrir la app y acepta el permiso MIDI.
Tras la primera carga funciona sin conexión. Si cambias la app, sube la versión de caché (`V` en `sw.js`, siempre con el prefijo `sightkeys-`).

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
    git remote add origin https://github.com/elquintero/SightKeys.git
    git push -u origin main

## Biblioteca compartida (GitHub)

Las canciones se guardan en `songs.json` en la raíz del repositorio (el repositorio por defecto está en `config.json`). Todos los dispositivos leen ese archivo; solo el administrador, que es quien tiene el token, puede añadir, editar o borrar canciones.

1. En GitHub crea un token *fine-grained* con acceso solo a este repositorio y permiso **Contents: Read and write**.
2. En la app: ⚙ › **Seguridad** › escribe `usuario/repositorio` y el token › *Guardar y comprobar*.
3. En ⚙ › **Gestión de biblioteca** ya puedes añadir canciones (`.mxl`, `.musicxml`, `.mid`) y asignarles categoría.

El token se guarda solo en el dispositivo del administrador (no se sube a ningún sitio).


## Repetir una sección
En el player, el botón de bucle sobre la línea del selector abre la selección del compás actual. Las flechas ‹ › se arrastran: el borde sigue al dedo o al ratón píxel a píxel (no solo por compases): hacia fuera amplía la sección y hacia dentro la reduce. Con una selección activa, ▶ empieza al principio de la sección y al llegar al final vuelve a empezar. La ✕ la cierra.

## Navegación (1.0.8)
PC: barra lateral con Inicio (Continúa tocando), Canciones, Buscar y Ajustes. Móvil: barra inferior con las mismas pantallas y Ajustes arriba a la derecha.

## 1.1.0
Tema Blanco / Barra negra (el player es igual y solo cambia la barra superior), tipografía clásica o moderna (Ajustes › General), filas sin cajas, ajustes del player escalados en pantallas grandes, icono de piano de cola, barra de estado del color de la app (manifest `standalone`; hay que reinstalar la app en Android para que se actualice).

## 1.1.1
Línea superior en Windows, título más a la izquierda en PC y inicio más compacto en móvil (ajustes en la misma fila que el título).

## 1.1.2
En una categoría, la flecha ‹ va junto al título (sin barra superior) y el título del móvil es algo mayor.

## 1.1.3
Márgenes estándar: títulos más bajos en PC/Windows y engranaje alineado con el título en móvil.

## 1.1.4
Quitado el margen superior duplicado en móvil (la zona segura ya la añade el body).

## 1.1.5
Inicio con saludo, última canción destacada con botón Continuar, recientes y sugerencia del día.

## 1.1.6
Iconos de categorías y canciones en su color, resumen en Biblioteca, sugerencias en Buscar (categorías y añadidas recientemente) y zoom táctil desactivado.

## 1.1.7
Opción "Iconos con color" (Ajustes › General, desactivada por defecto) y zoom táctil bloqueado en todas las pantallas.

## 1.1.8
La barra lateral se activa por tamaño (900 x 520 px o más), también en tablets; en móvil los ajustes ocupan toda la pantalla.

## 1.1.9
Tiempo de estudio por canción (se cuenta desde el primer minuto y se guarda en este dispositivo; se ve en Ajustes › Gestión de biblioteca), descripciones en todas las categorías y ajustes de móvil con flecha atrás y más separación.
