import React, { Component } from 'react'

class RowInputText extends Component {
  render() {
    const { id, children } = this.props;
    return (
      <div className="row mb-3">
        <label htmlFor={ id } className="col-sm-2 col-form-label">{ children }</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id={ id } />
        </div>
      </div>
    )
  }
}
export default RowInputText;
