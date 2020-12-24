import React from 'react';
import ReactDOM from 'react-dom';

// Con js puro podemos crear elementos html con
// document.createElement()

const element = document.createElement('h1');
element.innerText   = "Hello, curso react!";

// Ese elemento se pone dentro de un container
// app es un elemento dentro de public/index.html
const container = document.getElementById('app');

// Agregamos el elemento al container
container.appendChild(element);


// Podemos hacer esto mismo, pero con react

// React es análogo a createElement
// ReactDOM es análogo a appendChild

// Esto es jsx
const elementReact = <h1>Hello, curso react! Con react!!!</h1>

const containerReact = document.getElementById('app');

// render recibe qué renderizamos y dónde.
ReactDOM.render(elementReact, containerReact);