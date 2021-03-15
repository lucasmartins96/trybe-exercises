function insertBrazilStates() {
  const selectBrazilStates = document.getElementById('brazil-states');
  const brazilStates = {
    stateAcronym: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
    stateName: ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'],
  }
  for (let index = 0; index < brazilStates.stateAcronym.length; index += 1) {
    const optionBrazilStates = document.createElement('option');
    optionBrazilStates.innerText = brazilStates.stateName[index];
    optionBrazilStates.value = brazilStates.stateAcronym[index];
    selectBrazilStates.appendChild(optionBrazilStates);
  }
}
insertBrazilStates();