import './scss/main.scss';
import { Modal, Offcanvas, Toast, Tooltip } from 'bootstrap'; // Offcanvas activa data-bs-toggle="offcanvas"
import { initThemeToggle } from './js/theme.js';
import { initProductForm } from './js/product-form.js';
import { initInventory } from './js/inventory.js';
import { initSidebarToggle } from './js/sidebar.js';

initThemeToggle();
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new Tooltip(el));
initInventory();
initSidebarToggle();
initProductForm({ Modal, Toast });
