import React, { Component } from 'react';
import RowInputText from './RowInputText';
import RadioOption from './RadioOption';
import SelectBrazilianStates from './brazilian-states/Select';

class PersonalData extends Component {
  render() {
    return (
      <fieldset>
        <legend className="text-center">Dados pessoais</legend>
        <RowInputText id="inputName">Nome</RowInputText>
        <RowInputText id="inputEmail">Email</RowInputText>
        <RowInputText id="inputCPF">CPF</RowInputText>
        <RowInputText id="inputAddress">Endereço</RowInputText>
        <RowInputText id="inputCity">Cidade</RowInputText>
        <div className="row mb-3">
          <label htmlFor="estados" className="col-sm-2 col-form-label">Estado</label>
          <div className="col-sm-10">
            <SelectBrazilianStates />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Tipo residência</legend>
          <div className="col-sm-10">
            <RadioOption id="house">Casa</RadioOption>
            <RadioOption id="apartment">Apartamento</RadioOption>
          </div>
        </fieldset>
      </fieldset>
    )
  }
}

export default PersonalData;