// Resolução da lista de exercícios nº 1 - Curso Dev Full Stack Jr (Codifica)
//  Aluna: Andressa Monte

// Questão 1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if

// Resolução
// ativar sincronização com entrada de dado via terminal
const prompt = require('prompt-sync')();

// criação da variável que guarda valor do número inteiro a partir da resposta do usuário no terminal
let number = Number(prompt('Digite um número inteiro: '));

// bloco if/else para verificar se valor de entrada é par ou ímpar
if (number % 2 === 0) { // se divisível por 2, o número é par
    console.log(`O número ${number} é par!`); // resposta do programa
} else { // se não for divisível por 2, o número é ímpar
    console.log(`O número ${number} é ímpar!`); // resposta do programa
}


// Questão 2 - Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// Resolução
const prompt = require('prompt-sync')();

// criação da variável que guarda valor da idade a partir da resposta do usuário no terminal
let idade = Number(prompt('Digite a sua idade: '));

// bloco if/else para classificar idade com base no valor de entrada fornecido
if (idade >= 1 && idade <= 12) { // se tiver entre 1 e 12 anos
    console.log(`Você tem ${idade} anos e é uma criança!`);
} else if (idade >= 13 && idade <= 18) { // se tiver entre 13 e 18 anos
    console.log(`Você tem ${idade} anos e é um adolescente!`);
} else if (idade >= 19 && idade <= 59) { // se tiver entre 19 e 59 anos
    console.log(`Você tem ${idade} anos e é um adulto!`);
} else if (idade != 0 && idade >= 60) { // se tiver 60 anos ou mais
    console.log(`Você tem ${idade} anos e é um idoso!`);
}

// Questão 3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

// Resolução 
const prompt = require('prompt-sync')();

let nota_prova = Number(prompt('Informe a nota da sua prova: '));

// bloco if/else para verificar valor e classificar como 'Aprovado', 'Recuperação' ou 'Reprovado'
if (nota_prova >= 0 && nota_prova <= 10) { // condição inicial para considerar nota válida
    if (nota_prova >= 7 && nota_prova <= 10) { // se aluno tirar nota entre 7 e 10
        console.log(`Parabéns! Você foi Aprovado com a nota ${nota_prova}!`);
    } else if (nota_prova >= 4 && nota_prova < 7) { // se aluno tirar nota entre 4 e 6
        console.log(`Que pena! Você ficou de recuperação com a nota ${nota_prova}!`);
    } else { // se aluno tirar nota entre 0 e 3
        console.log(`Lamento! Você foi reprovado com a nota ${nota_prova}!`);
    }
} else {
    // se nota não obedecer ao intervalo, o programa informa que a nota é inválida
    console.log('Nota inválida! Digite uma nota entre 0 e 10!');
}

// Questão 4 - Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

// Resolução
const prompt = require('prompt-sync')();

let casas_Hogwarts = prompt('No universo de Harry Potter, qual é a sua casa preferida? Grifinória, Corvinal, Lufa-Lufa ou Sonserina?').toLowerCase();

switch(casas_Hogwarts) {
    case "grifinoria":
    case "grifinória":
        console.log('Você é uma pessoa corajosa e determinada!');
        break;
    case "corvinal":
        console.log('Você é uma pessoa estudiosa e criativa!');
            break;
    case "lufa-lufa":
    case "lufa lufa":
        console.log('Você é uma pessoa honesta e empática!');
        break;
    case "sonserina":
        console.log('Você é uma pessoa astuta e ambiciosa!');
        break;
    default:
        console.log('Essa casa não existe! Digite novamente!') 
        break;   
}

// Questão 5 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa que determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// Resolução
const prompt = require('prompt-sync')();

let peso = Number(prompt('Informe o seu peso em kg: '));
let altura = Number(prompt('Informe sua altura em metros: '));

// Cálculo do IMC = peso / altura X altura
let imc = peso / (altura * altura);

// Comando para exibir apenas o resultado do IMC (Índice de Massa Corporal)
console.log('Seu IMC é: ' + imc.toFixed(2)); // exibe o resultado com duas casas decimais

// Bloco if/else para classificar o IMC
if (imc < 18.5) { // se IMC é menor que 18.5
    console.log('Você está abaixo do peso ideal!');
} else if(imc >= 18.5 && imc <= 24.9) { // se IMC estiver entre 18.5 e 24.9
    console.log('Você está com o peso ideal!');
} else if(imc >= 25 && imc <= 29.9) { // se IMC estiver entre 25 e 29.9
    console.log('Você está com sobrepeso!');
} else if(imc >= 30 && imc <= 34.9) { // se IMC estiver entre 30 e 34.9
    console.log('Você está com obesidade grau 1!');
} else if(imc >= 35 && imc <= 39.9) { // se IMC estiver entre 35 e 39.9
    console.log('Você está com obesidade grau 2!');
} else {
    console.log('Você está com obesidade mórbida!');
}

// Questão 6 - Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

// Resolução 
const prompt = require('prompt-sync')();

let ladoA = Number(prompt('Informe o valor do lado A do triângulo: '));
let ladoB = Number(prompt('Informe o valor do lado B do triângulo: '));
let ladoC = Number(prompt('Por fim, informe o valor do lado C do triângulo: '));
perimetro_triangulo = ladoA + ladoB + ladoC; // cálculo do perímetro do triângulo

// bloco if/else para classificar triângulo com base na medida dos seus lados
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) { // condição inicial para checar se os lados formam um triângulo
    console.log('Você formou um triângulo!');
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) { // lados iguais = equilátero
        console.log(`O triângulo ABC é equilátero e tem perímetro igual a ${perimetro_triangulo}!`);
    } else if (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC || ladoB === ladoC && ladoB !== ladoA) { 
        // dois lados iguais = isósceles
        console.log(`O triângulo ABC é isósceles e tem perímetro igual a ${perimetro_triangulo}!`);
    } else { // três lados são diferentes
        console.log(`O triângulo ABC é escaleno e tem perímetro igual a ${perimetro_triangulo}`);
    }
} else {
    console.log('Você não formou um triângulo! Digite outros valores!')
}

// Questão 7 - As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// Resolução
const prompt = require('prompt-sync')();

const preco_menos_que_uma_duzia = 0.30;
const preco_mais_que_uma_duzia = 0.25;
const qtd_macas_compradas = Number(prompt('Quantas maçãs você comprou na feira? '));

// condição inicial para checar se o valor de entrada é válido
if (qtd_macas_compradas <= 0) { // se o valor for menor que 0
    console.log('Valor inválido! Digite novamente!');
} else { // se false, executa lógica para ler quantidade e calcular preço
    console.log(`Entendi! Você comprou ${qtd_macas_compradas} maçãs na feira!`);
    // variável preço para guardar o valor total da compra
    const preco = qtd_macas_compradas < 12 ? qtd_macas_compradas * preco_menos_que_uma_duzia : qtd_macas_compradas * preco_mais_que_uma_duzia;
    // exibe o valor total da compra com duas casas decimais
    console.log(`O valor total da sua compra é de R$ ${preco.toFixed(2)}!`);
}

// Questão 8 - Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// Resolução 
const prompt = require('prompt-sync')();
let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));

// antes de exibir em ordem crescente, verificar se os números são iguais
if (num1 === num2) { // se os números forem iguais
    console.log('Os números são iguais! Digite novamente!');
} else {// se não, executar a lógica para exibir os números em ordem crescente
    console.log(`Os números digitados foram: ${num1} e ${num2}`); // exibir valores 
    if (num1 < num2) { // se o primeiro número for menor que o segundo
        console.log(`A ordem crescente é: ${num1}, ${num2}`);
    } else { // se o primeiro número for maior que o segundo
        console.log(`A ordem crescente é: ${num2}, ${num1}`);
    }
}

// Questão 9 - Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for

// Resolução
const prompt = require('prompt-sync')();

// contador de 10 a 1
for (let i = 10; i >= 1; i--) { // variável de controle do loop for
    console.log(`Número atual: ${i}`); // exibe o valor atual do contador
}

// Questão 10 - Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// Resolução
const prompt = require('prompt-sync')();
let num = Number(prompt('Digite um número: '));

// verificar primeiro se o número é válido
if (isNaN(num)) {
    console.log('Por favor, digite um número válido.');
} else { // se sim, executar lógica 
    console.log(`Vamos imprimir ${num} 10 vezes!`); // confirmação do valor ao usuário 
    for (let i = 1; i <= 10; i++) { // loop para controlar impressões
        console.log(`Impressão ${i}: ${num}`);
    }
}

// Questão 11 - Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// Resolução
const prompt = require('prompt-sync')();
let soma = 0; // variável para guardar a soma total

let num1 = Number(prompt('Digite o primeiro número: '));
let num2 = Number(prompt('Digite o segundo número: '));
let num3 = Number(prompt('Digite o terceiro número: '));
let num4 = Number(prompt('Digite o quarto número: '));
let num5 = Number(prompt('Por fim, digite o quinto número: '));

// primeiro, verificar se os números são válidos
if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
    console.log('Por favor, digite números válidos!');
} else { // se sim, executar lógica 
    let numeros = [num1, num2, num3, num4, num5]; // array para guardar os números
    console.log(`Vamos calcular a soma dos números ${num1}, ${num2}, ${num3}, ${num4} e ${num5}!`); // confirmação do valor ao usuário 
    for (let i = 0; i < numeros.length; i++) { // loop para percorrer o array
        soma += numeros[i]; // soma total
    }
    console.log(`A soma total é: ${soma}`); // exibe o resultado da soma
}

// Questão 12 - Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// Resolução
const prompt = require('prompt-sync')();

let num_tabuada = Number(prompt('Digite um número entre 1 e 10 para ver a tabuada: '));
if (isNaN(num_tabuada) || num_tabuada < 1 || num_tabuada > 10) { // verifica primeiro se o número é válido
    console.log('Por favor, digite um número válido entre 1 e 10!');
} else { // se sim, executar lógica principal
    console.log(`Tabuada do ${num_tabuada}:`);
    for(let i = 1; i <= 10; i++) { // multiplica valor informado por números de 1 a 10
        let resultado = num_tabuada * i; // variável para guardar o resultado da multiplicação
        console.log(`${num_tabuada} X ${i} = ${resultado}`); // exibe a tabuada
    }
}

// Questão 13 - Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// Resolução
const prompt = require('prompt-sync')();
let numeros_decimais = []; // array para guardar os números decimais
let soma = 0; // variável para guardar a soma dos números
let contador = 0; // variável para contar a quantidade de números
let numero_decimal; // declarar fora do loop para ser acessível no while
do { // pede número decimal 1 vez 
    numero_decimal = Number(prompt('Digite um número decimal (ou 0 para sair): '));
    if (numero_decimal !== 0 && !isNaN(numero_decimal)) { // se número for diferente de 0 e for válido
        numeros_decimais.push(numero_decimal); 
        soma += numero_decimal; // soma cada número decimal recebido
        contador++; // conta quantidade de números adicionados
    }
} while (numero_decimal !== 0); // após 1º iteração, verifica se o número digitado é diferente de 0
// A lógica se repete até receber 0 

// calcula e exibe a média aritmética se algum número decimal válido foi digitado
if (contador > 0) {
    let media = soma / contador;
    console.log(`Você digitou ${contador} números decimais, são eles: ${numeros_decimais}`);
    console.log(`A média aritmética dos números digitados é: ${media}`);
} else {
    console.log('Não foi possível calcular a média.');
}
console.log('Programa encerrado!');

// Questão 14 - Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// Resolução
const prompt = require('prompt-sync')();
let number = Number(prompt('Digite um número inteiro válido: '));

if(!isNaN(number) && number >= 0)  { // se false, executa lógica principal
        let fatorial = 1; // variável para guardar o resultado do fatorial
        for (let i = 2; i <= number; i++) { // loop para calcular o fatorial
            fatorial *= i; // multiplicação do número atual pelo seu antecessor
            console.log(`${i-1} X ${number} = ${fatorial}`); // exibe o valor atual do fatorial
        }
        console.log(`O fatorial de ${number} é: ${fatorial}`); // exibe o resultado do fatorial
} else {
    console.log('Número inválido! Digite novamente!');
}

// Questão 15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

// Resolução
const prompt = require('prompt-sync')();
console.log('Os primeiros 10 números da sequência de Fibonacci são:');

let fibonacci_numeros = [0, 1]; // array para guardar sequência inicial

console.log('Os primeiros 10 números da sequência de Fibonacci são:');

for (let i = 2; i < 10; i++) { // faz 8 iterações, pois já temos 0 e 1 no array
    fibonacci_numeros[i] = fibonacci_numeros[i - 1] + fibonacci_numeros[i - 2]; // soma dos números anteriores
    console.log(fibonacci_numeros[i]);
}
console.log(`Sequência de Fibonacci: ${fibonacci_numeros.join('-')}`); // exibe a sequência completa
console.log('Programa encerrado!');