import React, { Component } from 'react'
import Teacher from './teacher.js'

export default class Teachers extends Component {
  render() {
    return (
      <ul className="Teachers">
        {this.props.data.teachers.map((teacherData) => {
          return <Teacher {...teacherData} />
        })}
      </ul>
    )
  }
}
