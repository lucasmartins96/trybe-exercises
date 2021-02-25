let precoDeCusto = 50;
let precoDeVenda = 75;

if ((precoDeCusto>=0)&&(precoDeVenda>=0)) {
  let precoDeCustoTotal = precoDeCusto*1.2; //facilita o cálculo realizando uma só vez, em vez de fazer um cálculo pra encontrar 20% de um valor e depois somar os 20% a outro valor.
  let lucro = precoDeVenda-precoDeCustoTotal;
  let lucroTotal = lucro*1000;
  console.log('Preço de custo: '+precoDeCusto+'\nPreço de custo+imposto de 20%: '+precoDeCustoTotal+'\nPreço de venda: '+precoDeVenda+'\nLucro p/ produto: '+lucro+'\nLucro vendendo 1000 produtos: '+lucroTotal);
} else {
  console.log('Algum dos valores valores estão inválidos!');  
}