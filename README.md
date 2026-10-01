# Carta digital para Anali

Sitio estático para una carta romántica y emocional, pensado para publicarse en GitHub Pages.

## Archivos principales

- `index.html`
- `style.css`
- `script.js`
- `media/video.mp4` (agrega tu video aquí)

## Subir a GitHub

1. Crea un repositorio nuevo en GitHub.
2. En la terminal, inicializa el repositorio local si aún no lo tienes:

```bash
git init
git add .
git commit -m "Primera versión de la carta"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

3. Asegúrate de que la carpeta `media` contiene el archivo `video.mp4`.

## Activar GitHub Pages

1. En GitHub, entra a tu repositorio.
2. Haz clic en la pestaña `Settings`.
3. En el menú lateral, abre `Pages`.
4. En `Build and deployment`, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Guarda los cambios.
6. GitHub generará una URL pública del tipo:

```text
https://TU_USUARIO.github.io/TU_REPO/
```

## Importante

- El archivo del video debe llamarse exactamente `video.mp4`.
- Debe estar dentro de `media/`.
- El sitio funciona como estático y no requiere backend.

## Verificar el sitio localmente

Puedes abrir `index.html` directamente en el navegador o usar un servidor local simple:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000/
```
