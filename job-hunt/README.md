# Job Hunt — Erick Bonilla

Sistema de búsqueda y tracking de aplicaciones a trabajos remotos de AI
(AI Implementation / AI Transformation / AI Automation Manager / AI Advocate).

## Estructura

- `tracker.xlsx` — tracker principal (hoja Aplicaciones con estados, Criterios, Estados).
- `cv-base/cv-master.md` — CV maestro, fuente de las versiones adaptadas.
- `applications/<id>-<empresa>/` — una carpeta por aplicación:
  - `cv.md` — fuente del CV adaptado a esa oferta
  - `Erick_Bonilla_CV.pdf` — PDF generado con `tools/build-cv.js`
  - `cover-letter.md` — si la oferta lo pedía
  - `answers.md` — respuestas enviadas, pregunta por pregunta
  - `job-post.md` — copia del texto de la oferta

## Generar un CV
```
node tools/build-cv.js applications/<carpeta>/cv.md applications/<carpeta>/Erick_Bonilla_CV.pdf
```
Con `--preview` resalta los datos faltantes entre [CORCHETES]; sin ese flag se
niega a generar el PDF si queda alguno.

## Criterios
- Roles: AI Implementation / AI Process Expert / AI Automation Manager / AI Advocate /
  AI Transformation (Head / Manager / Lead)
- Salario: pedir USD 5,000/mes (USD 60k/año), negotiable
- 100% remoto desde LATAM (Punta del Este, Uruguay)
