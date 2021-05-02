import React, { Component } from 'react';
import brazilianStates from '../../brazilianStates';
import Option from './Option';

class SelectBrazilianStates extends Component {
  render() {
    return (
      <select className="form-select" id="estados" aria-label="Default select example">
        { brazilianStates.map(({ acronym, state }) => <Option value={ acronym }>{ state }</Option>) }
      </select>
    )
  }
}

export default SelectBrazilianStates;
