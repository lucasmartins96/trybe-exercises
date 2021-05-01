import React, { Component } from 'react'

class RadioOption extends Component {
  render() {
    const { id, innerTextLabel } = this.props;
    return (
      <div className="form-check">
        <input className="form-check-input" type="radio" name="residenceType" id={ id } value="option1" defaultChecked />
        <label className="form-check-label" htmlFor={ id }>{ innerTextLabel }</label>
      </div>
    )
  }
}

export default RadioOption;
