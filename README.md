# MNN N5 kanji 🇯🇵

Aplicación web estática y progresiva (PWA / responsive para Web, iOS y Android) para aprender los **218 kanji de Minna no Nihongo (N5)** con explicaciones y vocabulario orientados a estudiantes hispanohablantes.

## 🌸 Características principales

- **218 Kanji completos:** Organizados por lecciones según el libro de ejercicios de Minna no Nihongo:
  - Pre-lección (数 - Números 1 al 10)
  - Parejas de lecciones: 1-2, 3-4, 5-6, 7-8, 9-10, 11-12, 13-14, 15-16, 17-18, 19-20, 21-22, 23-24
  - Lección 25
  - Vista completa de los 218 kanji
- **Modo Kanji:**
  - Botones cuadrados con bordes redondeados en tonos pastel.
  - **Mapa de calor de estudio:** El fondo de cada kanji aumenta de saturación e intensidad a medida que se estudia/toca más veces.
  - Botón para reiniciar los colores y contadores de la lección activa.
  - Paletas pastel intercambiables: Sakura (Rosa), Matcha (Verde), Lavanda (Morado) y Cielo (Azul).
- **Página de detalles de cada kanji:**
  - **Trazos animados con KanjiVG:** Animación paso a paso de los trazos del kanji con control de velocidad, pausa, retroceso, avance y numeración de trazos.
  - **Lienzo de caligrafía táctil:** Permite a los estudiantes practicar el trazo a mano alzada con plantilla y cuadrícula tradicional japonesa de 4 cuadrantes.
  - **Cartilla completa:** Pronunciaciones On'yomi (Katakana), Kun'yomi (Hiragana) y significado en español.
  - **Vocabulario de Minna no Nihongo:** Entre 2 y 5 palabras de ejemplo reales extraídas del vocabulario de las lecciones, con kanji, furigana, romaji, significado en español y pronunciación en audio con Web Speech API.
  - Enlace directo a Jisho.org.
- **Modo Flashcards:**
  - Inspirado en la app gana-katakana con giro 3D táctil.
  - Modos de estudio intercambiables:
    - **Imi (意味):** Anverso kanji → Reverso significado en español.
    - **Hatsuon (発音):** Anverso kanji → Reverso On'yomi y Kun'yomi.
    - **Tango (単語):** Anverso kanji → Reverso vocabulario de ejemplo de la lección con romaji y traducción.
  - Botones de **Mezclar**, **Reiniciar orden**, **Anterior** y **Siguiente**.
  - Atajos de teclado: Espacio (girar), Flecha Izquierda / Derecha.
- **100% Estática y Privada:**
  - No requiere servidor ni base de datos externa.
  - Todos los datos de estudio y favoritos se guardan localmente en `localStorage`.

## 🚀 Publicación en GitHub Pages

Para publicar esta app en GitHub Pages:
1. Sube el código a tu repositorio de GitHub.
2. Ejecuta `npm run build` para generar la carpeta estática `dist/`.
3. En GitHub, ve a **Settings > Pages > Build and deployment**, selecciona la rama donde publiques la carpeta `dist` (o usa la acción predeterminada de Vite para GitHub Pages).

## 📄 Licencias

- **Código de la aplicación:** Licencia MIT.
- **Diagramas vectoriales de Kanji:** Proyecto [KanjiVG](https://github.com/KanjiVG/kanjivg) por Ulrich Apel y colaboradores, bajo licencia **Creative Commons Attribution-Share Alike 3.0 (CC BY-SA 3.0)**.
- **Contenido educativo:** Referencias del vocabulario basadas en el plan de estudios *Minna no Nihongo Shokyu I* (3A Corporation).
