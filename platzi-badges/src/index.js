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

// Con react podemos crear un elemento
// recibe el tipo de elemento, sus atributos y el children.
// Children es el innerHTML del elemento.
const elementCreatedWithReact = React.createElement('h1', {}, 'Hello curso react 2!')
ReactDOM.render(elementCreatedWithReact, containerReact);

// Los links tienen atributos!
const reactLink = React.createElement(
    'a', 
    {
        href:"https://youtube.com",
        target:"_blank"
    }, 
    "Ir a youtube!"
);
ReactDOM.render(reactLink, containerReact);

// Agregar variables al elemento.

const name = "Guillermo";
const elementWithVariable = React.createElement('h1', {}, `Hi, I'm ${name}`);
ReactDOM.render(elementWithVariable, containerReact);


// Variables con jsx
// Dentro de las llaves puedo poner código de javascript
const variableWithJsx = <h1>Hi, I'm {name}</h1>
ReactDOM.render(variableWithJsx, containerReact);

// Expresión dentro de jsx
const proFunction = () => 5+5;
const jsxWithCode = <h1>This is the result of an expression {proFunction()}</h1>
// Si regresa un falsy value, muestra string vacío
ReactDOM.render(jsxWithCode, containerReact);

// Podemos poner lo que sea dentro de un jsx
const proJsx = (
    <div>
        <h1>Hi, I'm {name}</h1>
        <h2>This is the result of an expression: {proFunction()}</h2>
    </div>
);
ReactDOM.render(proJsx, containerReact);

// Para agregar muchas cosas dentro de un createElement,
// del tercer parámetro en adelante son children.
const hardCreateElement = React.createElement(
    'div',
    {},
    React.createElement(
        'h1',
        {},
        `Hi, I'm ${name}`
    ),
    React.createElement(
        'h2',
        {},
        `This is the result of an expression: ${proFunction()}`
    )
);
ReactDOM.render(hardCreateElement, containerReact);
