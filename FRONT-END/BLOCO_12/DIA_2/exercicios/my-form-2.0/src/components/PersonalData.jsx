import React, { Component } from 'react';
import RowInputText from './RowInputText';
import RadioOption from './RadioOption';
import SelectBrazilianStates from './SelectBrazilianStates';

class PersonalData extends Component {
  render() {
    return (
      <div>
        <RowInputText id="inputName" innerTextLabel="Nome"/>
        <RowInputText id="inputEmail" innerTextLabel="Email"/>
        <RowInputText id="inputCPF" innerTextLabel="CPF"/>
        <RowInputText id="inputAddress" innerTextLabel="Endereço"/>
        <RowInputText id="inputCity" innerTextLabel="Cidade"/>
        <div className="row mb-3">
          <label htmlFor="" className="col-sm-2 col-form-label">Estado</label>
          <div className="col-sm-10">
            <SelectBrazilianStates />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Tipo residência</legend>
          <div className="col-sm-10">
            <RadioOption id="house" innerTextLabel="Casa"/>
            <RadioOption id="apartment" innerTextLabel="Apartamento"/>
          </div>
        </fieldset>
      </div>
    )
  }
}

export default PersonalData;