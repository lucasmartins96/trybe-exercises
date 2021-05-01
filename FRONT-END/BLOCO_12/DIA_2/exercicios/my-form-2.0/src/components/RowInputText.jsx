import React, { Component } from 'react'

class RowInputText extends Component {
  render() {
    const { id, innerTextLabel } = this.props;
    return (
      <div className="row mb-3">
        <label htmlFor={ id } className="col-sm-2 col-form-label">{ innerTextLabel }</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id={ id } />
        </div>
      </div>
    )
  }
}
export default RowInputText;
