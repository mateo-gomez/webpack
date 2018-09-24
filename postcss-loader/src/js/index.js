import '../css/estilos.css'
import { messages } from './message.js'
import platziImg from '../images/platzi.png'
import data from './teachers.json'
import { renderToDOM } from './render-to-dom.js'

import React from 'react'
import { render } from 'react-dom'
import Teachers from './components/teachers.js'
import '../css/main.less'


render(<Teachers data={data} />, document.getElementById('container'))

console.log(data);

data.teachers.forEach((teacher) => {
  const element = document.createElement('li')
  element.textContent = teacher.nombre
  renderToDOM(element)
  console.log("entra");
})

document.write(messages.firstMessage)
messages.delayedMessage()

const img = document.createElement('img')
img.setAttribute('src', platziImg)
img.setAttribute('width', 50)
img.setAttribute('height', 50)

document.body.append(img)

console.log('hola mierda');
