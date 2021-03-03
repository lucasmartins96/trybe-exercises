let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

/*
1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

Valor esperado no console: Bem-vinda, Margarida
*/
console.log(`Bem-vinda, ${info.personagem} \n`);

/*
2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
*/
info['recorrente'] = 'Sim';
console.log(info);
console.log('\n');

/*
3 - Faça um for/in que mostre todas as chaves do objeto.
*/
for (const key in info) {
  console.log(key);
}

/*
4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
*/
console.log('\n');
for (const key in info) {
  console.log(info[key]);
}

/*
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
*/
let otherInfo = {
  personagem: `Tio Patinhas`,
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: `O último MacPatinhas`,
  recorrente: 'Sim'
}

for (const key in info, otherInfo) {
  (info[key] == 'Sim' && otherInfo[key] == 'Sim') ? console.log(`Ambos recorrentes`) : console.log(`${info[key]} e ${otherInfo[key]}`);
}