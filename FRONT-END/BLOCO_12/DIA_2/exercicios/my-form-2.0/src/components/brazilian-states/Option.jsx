import React, { Component } from 'react'

class Option extends Component {
  render() {
    const { children, value } = this.props;
    return <option value={ value }>{ children }</option>
  }
}
export default Option;
