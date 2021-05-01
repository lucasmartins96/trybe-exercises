import React, { Component } from 'react'
import PersonalData from './PersonalData'

class Form extends Component {
  render() {
    return (
      <form className="container w-50 p-3">
        <PersonalData />
      </form>
    )
  }
}

export default Form;
