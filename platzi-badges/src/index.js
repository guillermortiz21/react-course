import React from 'react';
import ReactDOM from 'react-dom';

// Vamos a mostrar el componente
import Badge from './components/Badge'

const container = document.getElementById('app');

// Badge es un componente, render recibe un elemento
// El componente se hace elemento como si fuera html.

ReactDOM.render(<Badge/>, container);