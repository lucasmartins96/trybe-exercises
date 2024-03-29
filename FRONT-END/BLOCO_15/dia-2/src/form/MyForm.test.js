import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyForm from './MyForm';

it('alterando o valor dos campos e testando o valor guardado', () => {
  const { getByTestId }= render (<MyForm />);
  const inputNome = getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe'}});
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' }});
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});
