# DESIGN.md — Sistema de Diseño: Alberto Cano D.

## 1. Identidad Visual y Dirección de Arte
- **Concepto:** *Architectural Data Editorial* (inspirado en Sasaki.com).
- **Personalidad:** Estratégico, preciso, transparente, de alto rigor técnico pero orientado a decisiones de negocio.
- **Principio rector:** El 90 % de la interfaz es monocromática (papel arquitectónico y tinta negra) para que los datos, las métricas de impacto y los casos de estudio respiren sin ruido visual. El color se usa de forma quirúrgica para categorizar disciplinas.

## 2. Paleta de Colores (WCAG AA Verificada)
### Superficies y Tintas (90% de la UI)
- `--bg-canvas`: `#FFFFFF` (Fondo principal de galería)
- `--bg-surface`: `#F5F4F0` (Piedra cálida / papel para bloques de métricas, filosofía y tarjetas alternas)
- `--bg-dark`: `#111111` (Obsidiana arquitectónica para footer o sección de contraste)
- `--ink-primary`: `#111111` (Títulos y texto principal — contraste 18.8:1)
- `--ink-secondary`: `#52524D` (Cuerpo descriptivo y metadatos — contraste 7.7:1)
- `--ink-muted`: `#767670` (Etiquetas secundarias y fechas — contraste 4.54:1)
- `--border-hairline`: `#E2E0D8` (Líneas estructurales de 1px entre módulos)

### Acentos por Disciplina (10% de la UI — Estilo modular Sasaki)
*Prohibido usar degradados o fondos saturados masivos. Solo para indicadores, puntos de disciplina, subrayados activos y etiquetas.*
- `--accent-econometrics`: `#C83E2B` (Terracota / Bermellón — MMM, Pricing, Econometría)
- `--accent-engineering`: `#1D4ED8` (Azul Cobalto — Python, KNIME, Snowflake, SQL)
- `--accent-ai`: `#0F766E` (Verde Esmeralda Técnico — Agentes IA, n8n, Automatización)
- `--accent-strategy`: `#B45309` (Ámbar Ocre — Finanzas, Costos, Docencia)

## 3. Tipografía (Carga ultrarrápida vía Google Fonts)
- **Display & UI (`--font-sans`):** `'DM Sans'` (pesos 400, 500, 700). Limpia, geométrica y arquitectónica. Tracking negativo en titulares grandes (`-0.03em`).
- **Editorial / Filosofía (`--font-serif`):** `'Newsreader'` (itálica 400). Uso exclusivo para la frase de filosofía de trabajo y énfasis conceptuales.
- **Datos y Métricas (`--font-mono`):** `'JetBrains Mono'` (pesos 400, 500). Uso obligatorio con `font-variant-numeric: tabular-nums` para cifras de impacto (`-90%`, `40+`), fechas y etiquetas de stack técnico.

## 4. Espaciado, Grilla y Geometría
- **Contenedor máximo:** `1320px` con margen lateral fluido (`clamp(1.25rem, 4vw, 3.5rem)`).
- **Grilla base:** 12 columnas en desktop (`gap: 1.5rem` / `24px`), 1 columna en móvil.
- **Líneas estructurales:** Uso frecuente de divisores `1px solid var(--border-hairline)` para separar filas de experiencia y métricas (estética de tabla financiera/plano).
- **Radios de borde (Geometry):**
  - Contenedores, tarjetas y botones: `0px` (esquinas rectas arquitectónicas) o máximo `2px`.
  - Pills de filtros y disciplinas: `9999px` (cápsulas limpias de 1px de borde).
- **Elevación:** Cero `box-shadow` difusos. La jerarquía se logra mediante cambio de superficie (`#FFFFFF` vs `#F5F4F0`) y bordes de `1px`.

## 5. Microinteracciones y Rendimiento
- **Velocidad:** 100 % HTML/CSS/JS nativo. Sin librerías pesadas.
- **Transiciones:** Secas y precisas (`transition: all 180ms cubic-bezier(0.2, 0, 0, 1)`).
- **Estados Hover:** Desplazamiento sutil de flechas (`translateX(4px)`), inversión limpia de botones o aparición de acento lateral izquierdo (`border-left: 3px solid`).

## 6. Anti-patrones (Qué evitar siempre)
- ❌ No usar modo oscuro genérico con colores neón o glassmorphism.
- ❌ No usar barras de progreso de "habilidades al 90%". Mostrar evidencia cuantitativa real (`+40 proyectos MMM`, `-90% esfuerzo de reporte`).
- ❌ No usar tarjetas con sombras grises flotantes ni esquinas muy redondeadas (`16px+`).