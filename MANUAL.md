# Manual de la página · Senderos del Folklore

Galería web pública del cuadro de danza — UTH Villanueva.
**Link público:** https://yacm030107.github.io/Senderos_del_Folklore/
**Repositorio:** https://github.com/Yacm030107/Senderos_del_Folklore

---

## 1. Qué contiene la página (de arriba hacia abajo)
1. **Cinta superior** — nombre del grupo (fija al bajar).
2. **Portada** — foto grupal + título + menú de botones.
3. **Reseña histórica** — origen y 6 hitos cronológicos.
4. **Elenco** — directora con foto + fichas con foto, edad, carrera y frase + lista del resto + insignias doradas ★ Fundador.
5. **Línea de tiempo** — riel interactivo de 4 etapas (toca cada punto).
6. **Galería de fotos** — 18 fotos en orden cronológico (toca para ampliar).
7. **Videos** — 13 clips de 20 segundos con miniatura (cargan al dar play).

## 2. Archivos importantes (carpeta `Senderos_del_Folklore-web`)
| Archivo | Para qué sirve |
|---|---|
| `index.html` | Todos los textos: reseña, elenco, línea de tiempo |
| `style.css` | Colores, tamaños y diseño |
| `app.js` | Lógica de galería, videos y línea de tiempo (no tocar sin saber) |
| `datos.json` | Lista de fotos/videos con sus títulos |
| `fotos/foto-01…18` | Fotos de la galería (orden cronológico) |
| `videos/clip-01…13` + `poster-01…13` | Clips y sus miniaturas |
| `elenco/*.jpg` | Fotos de integrantes y directora |
| `portada.jpg` | Foto de portada |
| `MANUAL.md` | Este manual |

## 3. Cómo ver los cambios que hagas
1. Edita y guarda el archivo en tu PC.
2. Abre `index.html` con doble clic para vista previa local.
3. Para publicarlo, sube el cambio (sección 5). GitHub tarda **1–3 min** en actualizar + recarga con **Ctrl+F5**.

## 4. Tareas comunes
- **Cambiar un texto:** abre `index.html` (Bloc de notas o VS Code), busca el texto, cámbialo, guarda.
- **Cambiar la portada:** guarda la foto nueva como `portada.jpg` (reemplaza).
- **Agregar foto a la galería:** guárdala en `fotos/` como `foto-19.jpg` (siguiente número) y agrega su línea en `datos.json` copiando el formato, con fecha `AAAA-MM-DD` para mantener el orden.
- **Agregar video:** recorta 20 s del centro en 720p, guárdalo como `clip-14.mp4`, crea su miniatura `poster-14.jpg` y agrega su línea en `datos.json`.
- **Nueva ficha de integrante:** copia su foto a `elenco/` y duplica una tarjeta `<article class="miembro">` en `index.html` cambiando foto, nombre, edad, carrera y frase. Para insignia dorada agrega `<span class="fundador">★ Fundador</span>` al inicio de la tarjeta.
- **Ocultar/mostrar una ficha:** envuélvela entre `<!--` y `-->` para ocultarla; quita esas marcas para mostrarla.

## 5. Publicar cambios (PowerShell)
```powershell
cd "C:\Users\sopor\Documents\Senderos_del_Folklore-web"
git add -A
git commit -m "Describe tu cambio"
git push origin main
```

## 6. Dar acceso de edición a otra persona
Repo → Settings → Collaborators → Add people → escribir su usuario → debe aceptar la invitación. Luego puede editar con el lápiz ✏️ en la web o clonando el repo.

## 7. Problemas comunes
- **No veo mi cambio:** espera 2 min → Ctrl+F5 → revisa pestaña Actions (verde = publicado).
- **`git push` pide usuario/clave:** usuario = tu GitHub, contraseña = token (no tu clave). Si falla, genera un token nuevo.
- **Foto borrosa:** el archivo original es muy pequeño/comprimido; consigue la foto original de la cámara.
- **Video no carga:** verifica que pese menos de 100 MB y sea `.mp4`.
