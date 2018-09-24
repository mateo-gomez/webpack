// console.log('hola mierda!');

import './estilos.css'
import message from './message.js'

const element = document.createElement('p')
const $container = document.getElementById('container')

$container.appendChild(element)

const printMessage = () => {
  element.textContent = message()
}

printMessage()

if (module.hot) {
  module.hot.accept('./message.js', () => {
    console.log('hemos cambiado')
    printMessage()
  })
}
