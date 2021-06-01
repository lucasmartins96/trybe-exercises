import React, { Component } from 'react'

class VaiComparecer extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="vaiComparecer">
        Presença:
        <input type="checkbox" id="vaiComparecer" name="vaiComparecer" value={ value } onChange={ handleChange } />
      </label>
    )
  }
}

export default VaiComparecer;
