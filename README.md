# StockLab

Panel de inventario con Bootstrap 5.3 compilado desde SCSS, Vite y modo claro/oscuro.

## Comandos
```
npm install
npm run dev
npm run build
npm run preview
npm run lint:css
```

**URL pública:** _pendiente_

## Retos
- [x] Reto 1: `z()` en `abstracts/_functions.scss`
- [ ] Reto 2: llena la tabla de abajo
- [x] Reto 3: `.app-shell--compact` + `--app-sidebar-width` + botón en `js/sidebar.js`
- [x] Reto 4: "descontinuado" solo en `_tokens.scss`
- [ ] Reto 5
- [x] Reto 6: buscador + KPI "Stock bajo"

## Reto 2: tamaño del CSS
| Build                 | Sin comprimir | gzip |
|---                    |---            |---   |
| Bootstrap completo    | 250.30 KB     | 34.17 KB |
| Importación selectiva | 191.36 KB     | 27.00 KB |

## Reflexión
1. ¿Por qué se sobrescriben las variables antes de importar variables.scss? ¿Qué papel cumple !default?
Para que de esta manera bootstrap respete los valores originales.
2. ¿Qué diferencia hay entre @use y @import en alcance y número de cargas?
@import puede provocar colisiones ya que todo lo importado que disponible en toda la hoja de estilos y en cambio @use crea un espacio de nombres por modulo y carga los archivos una sola vez.
3. Ejemplo de variable CSS indispensable y de variable de Sass.
CSS: --app-sidebar-width. Cambia en el navegador al activar .app-shell--compact, algo que Sass no puede hacer porque se resuelve al compilar.
4. ¿Qué problema resuelve @extend %pill y qué riesgo tiene con clases normales?
%pill guarda estilos compartidos en un placeholder que no genera CSS por sí solo. Solo se emite el selector que lo extiende, sin duplicar declaraciones ni arrastrar una clase sin usar.
5. Según mi tabla del Reto 2, ¿cuánto CSS ahorré? ¿Qué riesgo tiene quitar componentes en un equipo grande?
Bootstrap completo dio 250.30 kB (34.17 kB gzip) y la importación selectiva 191.36 kB (27.00 kB gzip). Ahorré unos 58.9 kB sin comprimir (23.5 %) y 7.2 kB en gzip (21 %). El riesgo es que alguien use una clase de un componente que se quitó (por ejemplo .dropdown-menu o .badge), que quede sin estilos y que el error pase inadvertido. Se mitiga documentando qué se importa y revisando el uso en las pruebas.

### Reto 3: ¿por qué no sirve una variable de Sass?
Una variable de Sass se sustituye por su valor al compilar, así que el CSS final ya trae `16rem` fijo y no puede cambiar en el navegador. Una variable CSS (`--app-sidebar-width`) sigue viva en tiempo de ejecución: la clase `.app-shell--compact` solo redefine su valor y la rejilla se ajusta sin recompilar.
