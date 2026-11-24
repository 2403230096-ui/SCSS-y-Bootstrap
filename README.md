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
| Build | Sin comprimir | gzip |
|---|---|---|
| Bootstrap completo | _ KB | _ KB |
| Importación selectiva | _ KB | _ KB |

## Reflexión
Tus 5 respuestas aquí (máx. 5 líneas cada una).

### Reto 3: ¿por qué no sirve una variable de Sass?
Una variable de Sass se sustituye por su valor al compilar, así que el CSS final ya trae `16rem` fijo y no puede cambiar en el navegador. Una variable CSS (`--app-sidebar-width`) sigue viva en tiempo de ejecución: la clase `.app-shell--compact` solo redefine su valor y la rejilla se ajusta sin recompilar.
