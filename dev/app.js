import './styles/main.scss';
import 'normalize.css';
import createMenu from './components/menu/menu';

var menu = createMenu(['Главная','Обо мне','Портфолио'], 'nav-menu');
document.body.appendChild(menu);

console.log('in index.js');