import React from 'react'
import '../../css/teacher.styl'

export default function Teacher(props) {
  return (
    <li className="Teacher">
      {props.nombre} <a href={`https://twitter.com/${props.twitter}`}>{props.twitter}</a>
    </li>
  )
}
