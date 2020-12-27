import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
// Vamos a mostrar el componente
import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

// Badge es un componente, render recibe un elemento
// El componente se hace elemento como si fuera html.

ReactDOM.render(
    <BadgeNew/>, 
    container
);