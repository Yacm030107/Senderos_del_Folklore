# Senderos_del_Folklore
Galería web pública del cuadro de danza Senderos del Folklore · UTH Villanueva.
Desde 20 julio 2025 · Dir. Nancy Mencias · 15 bailarines.

## Ver local
Abre `index.html` con doble clic.

## Contenido
- `portada.jpg` — temporal tomada de julio 2025. Reemplázala con la foto del chat (guárdala como `portada.jpg`).
- `fotos/` — 18 fotos ordenadas cronológico (ver `datos.json`).
- `videos/` — 12 clips de 20s, 720p, centro de cada original (mejores partes), audio original.
- `datos.json` — manifiesto con evento y archivo original.

## Publicar en GitHub Pages (usuario Yacm030107)
```powershell
cd "C:\Users\sopor\Documents\Senderos_del_Folklore-web"
git init; git add .; git commit -m "Galería Senderos del Folklore"
gh auth login
gh repo create Senderos_del_Folklore --public --source=. --push
# Luego en GitHub: Settings > Pages > Deploy from branch > main / root
# Link: https://yacm030107.github.io/Senderos_del_Folklore/
```
Sin `gh`, crea el repo vacío en github.com/Yacm030107/new llamado `Senderos_del_Folklore` público, luego:
```powershell
git remote add origin https://github.com/Yacm030107/Senderos_del_Folklore.git
git branch -M main; git push -u origin main
```
