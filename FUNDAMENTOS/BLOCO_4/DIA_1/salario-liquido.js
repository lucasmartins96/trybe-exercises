let salarioBruto = 3000;
let salarioBase;
let salarioLiquido;
let valorIR;

//INSS
if (salarioBruto>5189.82) {
  salarioBase = salarioBruto-570.88;
} else if (salarioBruto>2594.93) {
  salarioBase = salarioBruto*0.89; //simplificando o cálculo. 100-11% = 89
} else if (salarioBruto>1556.95) {
  salarioBase = salarioBruto*0.91; //simplificando o cálculo. 100-9% = 91
} else {
  salarioBase = salarioBruto*0.92; //simplificando o cálculo. 100-8% = 92
}

//IR ---> valorIR = (salario base * alíquota) - parcela
if (salarioBase>4664.68) {
  valorIR = (salarioBase*0.275)-869.36; 
} else if (salarioBase>3751.06) {
  valorIR = (salarioBase*0.225)-636.13;
} else if (salarioBase>2826.66) {
  valorIR = (salarioBase*0.15)-354.8;
} else if (salarioBase>1903.99) {
  valorIR = (salarioBase*0.075)-142.8;
} else {
  valorIR = 0;
}

//Salário líquido
salarioLiquido = salarioBase-valorIR;

console.log('Salário Bruto: R$'+salarioBruto+'\nSalário Base: R$'+salarioBase.toFixed(2)+'\nValor IR: R$'+valorIR.toFixed(2)+'\nSalário Líquido: R$'+salarioLiquido.toFixed(2));