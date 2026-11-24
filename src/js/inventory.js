// Reto 6: buscador y KPI "Stock bajo"
const tbody = () => document.querySelector('#productTable tbody');

export function filterRows() {
  const query = document.querySelector('#searchInput').value.trim().toLowerCase();
  const rows = tbody().querySelectorAll('tr:not(#emptyRow)');
  let visible = 0;
  rows.forEach((tr) => {
    const text = `${tr.cells[0].textContent} ${tr.cells[1].textContent}`.toLowerCase();
    const match = text.includes(query);
    tr.hidden = !match;
    if (match) visible += 1;
  });
  document.querySelector('#emptyRow').hidden = visible > 0;
}

export function updateLowStockKpi() {
  const low = tbody().querySelectorAll('.status-badge--bajo').length;
  document.querySelector('#kpiLowStock').textContent = String(low);
}

export function initInventory() {
  document.querySelector('#searchInput').addEventListener('input', filterRows);
  updateLowStockKpi();
}
