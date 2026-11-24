// Reto 3: colapsar la barra lateral a solo iconos
export function initSidebarToggle() {
  const btn = document.querySelector('#sidebarToggle');
  const shell = document.querySelector('.app-shell');
  btn?.addEventListener('click', () => {
    const compact = shell.classList.toggle('app-shell--compact');
    btn.setAttribute('aria-expanded', String(!compact));
    btn.setAttribute('aria-label', compact ? 'Expandir barra lateral' : 'Contraer barra lateral');
    btn.textContent = compact ? '»' : '«';
  });
}
