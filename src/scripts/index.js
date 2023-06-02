import '../styles/main.scss';
import * as bootstrap from 'bootstrap';

const sidebar = document.querySelector('.sidebar-admin');
const toggleSidebar = document.querySelector('.btn-sidebar');
const content = document.querySelector('.main-with-sidebar');

toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  content.classList.toggle('sidebar-opened');
});
