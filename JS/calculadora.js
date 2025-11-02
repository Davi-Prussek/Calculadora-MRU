/*==================================== PEGAR ELEMENTOS DO HTML ====================================*/

/* Parte que pega os ID's dos botões dos números da calculadora */

//Botões de números da calculadora grande
const _01 = document.getElementById("1");
const _02 = document.getElementById("2");
const _03 = document.getElementById("3");
const _04 = document.getElementById("4");
const _05 = document.getElementById("5");
const _06 = document.getElementById("6");
const _07 = document.getElementById("7");
const _08 = document.getElementById("8");
const _09 = document.getElementById("9");
const _00 = document.getElementById("0");

//Botões de números da calculadora pequena
const _01_pequena = document.getElementById("1-pequena");
const _02_pequena = document.getElementById("2-pequena");
const _03_pequena = document.getElementById("3-pequena");
const _04_pequena = document.getElementById("4-pequena");
const _05_pequena = document.getElementById("5-pequena");
const _06_pequena = document.getElementById("6-pequena");
const _07_pequena = document.getElementById("7-pequena");
const _08_pequena = document.getElementById("8-pequena");
const _09_pequena = document.getElementById("9-pequena");
const _00_pequena = document.getElementById("0-pequena");

/* Parte que pega os ID's dos botões dos símbolos básicos da calculadora */


const mais = document.getElementById("+");
const menos = document.getElementById("-");
const divisao = document.getElementById("/");
const multiplicacao = document.getElementById("*");
const igual = document.getElementById("=");
const C = document.getElementById("C");
const AC = document.getElementById("AC");
const abre_parenteses = document.getElementById("abre-parenteses");
const fecha_parenteses = document.getElementById("fecha-parenteses");
const ponto = document.getElementById(".");
const porcentagem = document.getElementById("%");
const potencia = document.getElementById("potencia");

const mais_pequena = document.getElementById("+-pequena");
const menos_pequena = document.getElementById("--pequena");
const divisao_pequena = document.getElementById("/-pequena");
const multiplicacao_pequena = document.getElementById("*-pequena");
const igual_pequena = document.getElementById("=-pequena");
const C_pequena = document.getElementById("C-pequena");
const AC_pequena = document.getElementById("AC-pequena");
const abre_parenteses_pequena = document.getElementById("abre-parenteses-pequena");
const fecha_parenteses_pequena = document.getElementById("fecha-parenteses-pequena");
const ponto_pequena = document.getElementById(".-pequena");
const porcentagem_pequena = document.getElementById("%-pequena");
const potencia_pequena = document.getElementById("potencia-pequena");

//Input da calculadora
let inputCalculadora = document.getElementById("conta-na-tela");

//Variavel global da calculadora pra ficar mais prático
let teste = inputCalculadora.value.split("");

//Varíavel pra pegar o ID do botão que apaga o histórico
const apagar = document.getElementById("apagar-historico");

//Pega o ID do histórico pra criar e salvar dinâmicamente
const divHistorico = document.getElementById("parte-historico");
const botaoHistorico = document.getElementById("mostrarHistorico");
divHistorico.style.display = "none";

let salvar = "";
/*FUNÇÕES DA CALCULADORA*/

//Função que coloca os números no input da calculadora
function digitarNumero() {
  //Sempre atualizar a variável teste
  teste = inputCalculadora.value.split("");

  //Parte que coloca os números no input
  switch (event.target.id) {
    case "1":
    case "1-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 1;
      } else {
        inputCalculadora.value += 1;
      }
      break;
    case "2":
    case "2-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 2;
      } else {
        inputCalculadora.value += 2;
      }
      break;
    case "3":
    case "3-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 3;
      } else {
        inputCalculadora.value += 3;
      }
      break;
    case "4":
    case "4-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 4;
      } else {
        inputCalculadora.value += 4;
      }
      break;
    case "5":
    case "5-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 5;
      } else {
        inputCalculadora.value += 5;
      }
      break;
    case "6":
    case "6-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 6;
      } else {
        inputCalculadora.value += 6;
      }
      break;
    case "7":
    case "7-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 7;
      } else {
        inputCalculadora.value += 7;
      }
      break;
    case "8":
    case "8-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 8;
      } else {
        inputCalculadora.value += 8;
      }
      break;
    case "9":
    case "9-pequena":
      if (teste[teste.length - 1] == ")") {
        inputCalculadora.value += "*";
        inputCalculadora.value += 9;
      } else {
        inputCalculadora.value += 9;
      }
      break;
    case "0":
    case "0-pequena":
      if (teste[teste.length - 1] == "/") {
      } else {
        if (teste[teste.length - 1] == ")") {
          inputCalculadora.value += "*";
          inputCalculadora.value += 0;
        } else {
          inputCalculadora.value += 0;
        }
      }
      break;
  }
}

//Função que vai criando o histórico
function createHistory() {
  if (inputCalculadora.value !== "") {
  let novoItem = document.createElement("li");
  let resposta = document.createElement("p");
  novoItem.innerText = salvar.value+" =";
  resposta.innerText = inputCalculadora.value = math.evaluate(teste.join(""));
  document.getElementById("historico").appendChild(novoItem);
  novoItem.appendChild(resposta);
}}

//Função que apaga o histórico inteiro
function apagarHistorico() {
const ul = document.getElementById("historico");
ul . innerHTML = "";
}

/*Função que coloca os símbolos no imput da calculadora e diz o resultado da equação e faz o sistema funcionar*/
function digitarSimbolo() {
  const preguica = ["+", "-", "/", "*", "%", "(", "^"];
  const muitaPreguica = ["/", "*", "%", "^", "%",];
  const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //Sempre atualizar a variável teste
  teste = inputCalculadora.value.split("");

  //Parte que coloca os símbolos no input e faz a verificação
  switch (event.target.id) {
    case "+":
    case "+-pequena":
    case "-":
    case "--pequena":
    case "/":
    case "/-pequena":
    case "*":
    case "*-pequena":
    case ".":
    case ".-pequena":

      //Verifica se são dois símbolos seguidos ou não

      //Inclui somente o "+" ou o "-" no começo
      if ((!muitaPreguica.includes(teste[teste.length - 1]) && teste.length == 0 && (event.target.id == "+" || event.target.id == "+-pequena" || event.target.id == "-" || event.target.id == "--pequena"))) {
        if (event.target.id.includes("-pequena")) {
          inputCalculadora.value += event.target.id.replace("-pequena", "");
        } else { inputCalculadora.value += event.target.id }
      }

      else if ((teste[teste.length - 1] == "(") && event.target.id == "+" || event.target.id == "+-pequena" || event.target.id == "-" || event.target.id == "--pequena") {
        if (event.target.id.includes("-pequena")) {
          inputCalculadora.value += event.target.id.replace("-pequena", "");
        } else { inputCalculadora.value += event.target.id }
      }
      else if (!preguica.includes(teste[teste.length - 1])) {
        if (event.target.id.includes("-pequena")) {
          inputCalculadora.value += event.target.id.replace("-pequena", "");
        } else { inputCalculadora.value += event.target.id }
      }
      break;

    case "abre-parenteses":
    case "abre-parenteses-pequena":
      inputCalculadora.value += "(";

      break;
    case "fecha-parenteses":
    case "fecha-parenteses-pequena":
      if (teste.length !== 0) {
        inputCalculadora.value += ")";
      }
      break;

    //Parte que apaga o tudo
    case "C":
    case "C-pequena":
      teste.pop();
      inputCalculadora.value = teste.join("");
      break;

    //Parte que apaga a ultima coisa
    case "AC":
    case "AC-pequena":
      inputCalculadora.value = "";
      break;

    //Parte que coloca porcentagem no input
    case "%":
    case "%-pequena":
      if (numeros.includes(teste[teste.length - 1])) {
        inputCalculadora.value += "%";
      }
      break;

    //Parte que coloca potência no input
    case "potencia":
    case "potencia-pequena":
      if (
        teste.length > 0 &&
        teste[teste.length - 1] !== "+" &&
        teste[teste.length - 1] !== "-" &&
        teste[teste.length - 1] !== "*" &&
        teste[teste.length - 1] !== "/" &&
        teste[teste.length - 1] !== "(" &&
        teste[teste.length - 1] !== ")" &&
        teste[teste.length - 1] !== "^"
      ) {
        inputCalculadora.value += "^";
      }
      break;
    //Parte que entrega o resultado
    case "=":
    case "=-pequena":
try {
      let tamanho = inputCalculadora.value;
      //Loops que vão verificar se os () estão todos fechados e vai fechar certinho caso estejam errados

function verificaParenteses () {
      //Variáveis pra fazer a contagem dos ()
      let verificaAbre = 0;
      let verificaFecha = 0;

for (let i = 0; i < teste.length; i++) {
        if (teste[i] == "(" && teste[i + 1] == ")") {
          teste[i] = "";
          teste[i + 1] = "";
        }
      }
      
      for (let i = 0; i < teste.length; i++) {

        while (teste[teste.length - 1] == "(") {
          teste.pop();
          inputCalculadora.value = teste.join("");
        }
        inputCalculadora.value = teste.join("");
      }

      //loop que vai contar quantos tem de cada
      for (let item of teste) {
        if (item == "(") {
          verificaAbre++;
        } if (item == ")") {
          verificaFecha++;
        }
      }

      //Aqui ele verifica qual dos casos é:

      //Se o "(" for maior, ele vai colocar ")" até ficarem com a mesma quantidade e depois só junta o array em string denovo pra fazer a conta no final do código
      if (verificaAbre > verificaFecha) {
        for (let i = 0; i < verificaAbre - verificaFecha; i++) {
          teste.push(")");
          inputCalculadora.value = teste.join("");
        }

        //Se o ")" for maior, ele vai colocar "(" até ficarem com a mesma quantidade e depois só junta o array em string denovo pra fazer a conta no final do código
      } else {
        for (let i = 0; i < verificaFecha - verificaAbre; i++) {
          teste.unshift("(");
          inputCalculadora.value = teste.join("");
        }
        for (let i = 0; i < teste.length; i++) {
        if (teste[i] == "(" && teste[i + 1] == ")") {
          teste[i] = "";
          teste[i + 1] = "";
        }
      }
      }
}
verificaParenteses();

      //Verifica se o ultimo elemento do input é um símbolo, se for, ele tira pra poder fazer a conta
      if (preguica.includes(teste[teste.length - 1])) {
        teste.pop();
        if (tamanho == Infinity) {
          inputCalculadora.value = "Valor grande demais!";
        } else {
          for (let i = 0; i < teste.length; i++) {
            if (teste[i] == "%") {
              teste[i] = "/100*";
            };
            inputCalculadora.value = teste.join("");
          }
        }
      } else {
        tamanho = math.evaluate(teste.join(""));
        if (tamanho == Infinity) {
          inputCalculadora.style.color = "red";
          inputCalculadora.value = "Valor grande demais!";
          setTimeout(() => {
            inputCalculadora.style.color = "";
            inputCalculadora.value = "";
          }, 1000);
        } else {
          for (let i = 0; i < teste.length; i++) {
            if (teste[i] == "%") {
              teste[i] = "/100*";
            };
            verificaParenteses();
          }
            if (inputCalculadora.value !== "") {
              salvar = inputCalculadora;
              createHistory();
              inputCalculadora.value = math.evaluate(teste.join(""));
            } else {
              inputCalculadora.value = "Insira algum valor!";
              inputCalculadora.style.color = "red";
              setTimeout(() => {
            inputCalculadora.style.color = "";
            inputCalculadora.value = "";
              }, 1000);
            }
        }
      }
  } catch {
    inputCalculadora.value = "Escreva direito, por favor!";
    inputCalculadora.style.color = "red";
    setTimeout(() => {
    inputCalculadora.value = "";
    inputCalculadora.style.color = "";
    }, 1000);
  }
}
}

//Função que abre e fecha a parte do histórico
function showHistory() {
  divHistorico.style.display=="block"?divHistorico.style.display="none":divHistorico.style.display="block";
}

//Botões que fazem os números serem colocados no input da calculadora
_01.addEventListener("click", digitarNumero);
_02.addEventListener("click", digitarNumero);
_03.addEventListener("click", digitarNumero);
_04.addEventListener("click", digitarNumero);
_05.addEventListener("click", digitarNumero);
_06.addEventListener("click", digitarNumero);
_07.addEventListener("click", digitarNumero);
_08.addEventListener("click", digitarNumero);
_09.addEventListener("click", digitarNumero);
_00.addEventListener("click", digitarNumero);

_01_pequena.addEventListener("click", digitarNumero);
_02_pequena.addEventListener("click", digitarNumero);
_03_pequena.addEventListener("click", digitarNumero);
_04_pequena.addEventListener("click", digitarNumero);
_05_pequena.addEventListener("click", digitarNumero);
_06_pequena.addEventListener("click", digitarNumero);
_07_pequena.addEventListener("click", digitarNumero);
_08_pequena.addEventListener("click", digitarNumero);
_09_pequena.addEventListener("click", digitarNumero);
_00_pequena.addEventListener("click", digitarNumero);

//Botões que fazem as equações e sistemas da calculadora funcionarem
mais.addEventListener("click", digitarSimbolo);
menos.addEventListener("click", digitarSimbolo);
divisao.addEventListener("click", digitarSimbolo);
multiplicacao.addEventListener("click", digitarSimbolo);
igual.addEventListener("click", digitarSimbolo);
abre_parenteses.addEventListener("click", digitarSimbolo);
fecha_parenteses.addEventListener("click", digitarSimbolo);
C.addEventListener("click", digitarSimbolo);
AC.addEventListener("click", digitarSimbolo);
ponto.addEventListener("click", digitarSimbolo);
porcentagem.addEventListener("click", digitarSimbolo);
potencia.addEventListener("click", digitarSimbolo);

mais_pequena.addEventListener("click", digitarSimbolo);
menos_pequena.addEventListener("click", digitarSimbolo);
divisao_pequena.addEventListener("click", digitarSimbolo);
multiplicacao_pequena.addEventListener("click", digitarSimbolo);
igual_pequena.addEventListener("click", digitarSimbolo);
abre_parenteses_pequena.addEventListener("click", digitarSimbolo);
fecha_parenteses_pequena.addEventListener("click", digitarSimbolo);
C_pequena.addEventListener("click", digitarSimbolo);
AC_pequena.addEventListener("click", digitarSimbolo);
ponto_pequena.addEventListener("click", digitarSimbolo);
porcentagem_pequena.addEventListener("click", digitarSimbolo);
potencia_pequena.addEventListener("click", digitarSimbolo);
botaoHistorico.addEventListener("click", showHistory);
apagar.addEventListener("click", apagarHistorico);
inputCalculadora.addEventListener("keydown", function (event) { event.preventDefault(); });