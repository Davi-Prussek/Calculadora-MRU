/*==================================== PEGAR ELEMENTOS DO HTML ====================================*/

//Parte que pega o ID dos elementos do HTML que vão controlar a movimentações entre as partes da página

const botaoAbaVel = document.getElementById("velocidade");
const botaoAbaTem = document.getElementById("tempo");
const botaoAbaDis = document.getElementById("distancia");
const calculadora = document.getElementById("calculadora");
const vazia = document.getElementById("vazia");

const parte_I = document.getElementById("parte-I");
const parte_II = document.getElementById("parte-II");
const parte_III = document.getElementById("parte-III");

parte_I.style.display = "none";
parte_II.style.display = "none";
parte_III.style.display = "none";

//Parte que pega o ID dos elementos do HTML que vão entregar o cálculo
const res_I = document.getElementById("resposta-I");
const res_II = document.getElementById("resposta-II");
const res_III = document.getElementById("resposta-III");

//Parte que pega o ID dos botões do HTML
const botaoCalc_I = document.getElementById("calcular-I");
const botaoCalc_II = document.getElementById("calcular-II");
const botaoCalc_III = document.getElementById("calcular-III");

//Parte que pega o ID dos botões de reset
const reset_I = document.getElementById("reset-I");
const reset_II = document.getElementById("reset-II");
const reset_III = document.getElementById("reset-III");

//Parte que pega os ID's dos botões dos números da calculadora
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

//Parte que pega os ID's dos botões dos símbolos básicos da calculadora
const mais = document.getElementById("+");
const menos = document.getElementById("-");
const divisao = document.getElementById("/");
const multiplicacao = document.getElementById("*");
const igual = document.getElementById("=");
const C = document.getElementById("C");
const AC = document.getElementById("AC");
const abre_parenteses = document.getElementById("abre-parenteses")
const fecha_parenteses = document.getElementById("fecha-parenteses")
const ponto = document.getElementById(".");
//Input da calculadora
let inputCalculadora = document.getElementById("conta-na-tela");

//Variavel global da calculadora pra ficar mais prático
let teste = inputCalculadora.value.split("");

/*==================================== ACABOU ESSA PARTE ====================================*/

/*======================== CRIAÇÃO DE VARIÁVEIS PRA USAR NOS CÁLCULOS ========================*/

//Criação das variáveis pra usar nos cálculos de velocidade
let vel_dis = document.getElementById("velocidade_distancia");
let vel_tem = document.getElementById("velocidade_tempo");

//Criação das variáveis pra usar nos cálculos de tempo
let tem_dis = document.getElementById("tempo_distancia");
let tem_vel = document.getElementById("tempo_velocidade");

//Criação das variáveis pra usar nos cálculos de distância
let dis_tem = document.getElementById("distancia_tempo");
let dis_vel = document.getElementById("distancia_velocidade");

//Criação global da variável de mensagem vazia
const vazio = (innerHTML = "Preencha todos os campos!");

//Variável principal dos cálculos
let conta = 0;

/*==================================== ACABOU ESSA PARTE ====================================*/

/*========= CRIAÇÃO DAS FUNÇÕES DOS BOTÕES E DOS CÁLCULOS QUE FAZEM ESSA TRALHA RODAR =========*/

/*FUNÇÔES QUE CONTROLAM AS PÁGINAS*/

//Config da parte de velocidade
function mostrar() {
  if (parte_I.style.display == "none" || vazia.style.display == "block") {
    parte_I.style.display = "block";
    vazia.style.display = "none";
    parte_II.style.display = "none";
    parte_III.style.display = "none";
  } else {
    parte_I.style.display = "none";
    vazia.style.display = "block";
  }

  if (parte_II.style.display == "block" || parte_III.style.display == "block") {
    parte_I.style.display = "block";
    parte_II.style.display = "none";
    parte_III.style.display = "none";
  }
}

//Config da parte de tempo
function mostrar2() {
  if (parte_II.style.display == "none" || vazia.style.display == "block") {
    parte_II.style.display = "block";
    vazia.style.display = "none";
  } else {
    vazia.style.display = "block";
    parte_II.style.display = "none";
  }

  if (parte_I.style.display == "block" || parte_III.style.display == "block") {
    parte_II.style.display = "block";
    parte_I.style.display = "none";
    parte_III.style.display = "none";
  }
}

//Config da parte de distância
function mostrar3() {
  if (parte_III.style.display == "none" || vazia.style.display == "block") {
    parte_III.style.display = "block";
    vazia.style.display = "none";
  } else {
    vazia.style.display = "block";
    parte_III.style.display = "none";
  }

  if (parte_I.style.display == "block" || parte_II.style.display == "block") {
    parte_III.style.display = "block";
    parte_I.style.display = "none";
    parte_II.style.display = "none";
  }
}

//Função que faz o Enter do teclado funcionar e mostrar o resultado
function enter(tecla) {
  if (parte_I.style.display == "block" && tecla.key === "Enter") {
    calc_vel();
  } else if (parte_II.style.display == "block" && tecla.key === "Enter") {
    calc_tem();
  } else if (parte_III.style.display == "block" && tecla.key === "Enter") {
    calc_distancia();
  }
}

//Função que reseta os inputs e o resultado
function resetar() {
  vel_dis.value = "";
  vel_tem.value = "";
  tem_dis.value = "";
  tem_vel.value = "";
  dis_tem.value = "";
  dis_vel.value = "";

  res_I.innerText = "";
  res_II.innerText = "";
  res_III.innerText = "";
}

/*FUNÇÕES DE CÁLCULO E ENTREGA DE RESPOSTAS*/

//Cálcula e entrega o resultado da conta de velocidade
function calc_vel() {
  let vel_dis = document.getElementById("velocidade_distancia").value;
  let vel_tem = document.getElementById("velocidade_tempo").value;

  conta = vel_dis / vel_tem;
  if (vel_dis !== "" && vel_tem !== "") {
    res_I.style.color = "";
    res_I.innerHTML =
      "A velocidade constante durante o percurso foi de " +
      conta.toFixed(2) +
      "km/h";
  } else {
    res_I.style.color = "red";
    res_I.innerHTML = vazio;
  }
}

//Cálcula e entrega o resultado da conta de tempo
function calc_tem() {
  let tem_dis = document.getElementById("tempo_distancia").value;
  let tem_vel = document.getElementById("tempo_velocidade").value;

  conta = tem_dis / tem_vel;
  if (tem_dis !== "" && tem_vel !== "") {
    res_II.style.color = "";
    if (decimal(conta) == 0) {
      if (conta == 1) {
        res_II.innerHTML =
          "Com a velocidade constante de " +
          tem_vel +
          "km/h vai demorar " +
          conta +
          " hora";
      } else {
        res_II.innerHTML =
          "Com a velocidade constante de " +
          tem_vel +
          "km/h vai demorar " +
          conta +
          " horas";
      }
    } else if (decimal(conta) < 2) {
      res_II.innerHTML =
        "Com a velocidade constante de " +
        tem_vel +
        "km/h vai demorar " +
        conta.toFixed(1) +
        " horas";
    } else {
      res_II.innerHTML =
        "Com a velocidade constante de " +
        tem_vel +
        "km/h vai demorar " +
        conta.toFixed(2) +
        " horas";
    }
  } else {
    res_II.style.color = "red";
    res_II.innerHTML = vazio;
  }
}

//Cálcula e entrega o resultado da conta de distância
function calc_distancia() {
  let dis_tem = document.getElementById("distancia_tempo").value;
  let dis_vel = document.getElementById("distancia_velocidade").value;

  conta = dis_vel * dis_tem;
  if (dis_tem !== "" && dis_vel !== "") {
    res_III.style.color = "";
    res_III.innerHTML = conta.toFixed(2);
  } else {
    res_III.style.color = "red";
    res_III.innerHTML = vazio;
  }
}
//Função que calcula se tem decimais ou não nas respostas pra entregas respostas diferentes
function decimal(numero) {
  let teste = numero.toString();
  if (teste.includes(".")) {
    let final = teste.split(".");
    return final[1].length;
  } else {
    return 0;
  }
}

/*FUNÇÕES DA CALCULADORA*/

//Função que coloca os números no input da calculadora
function digitarNumero() {

  //Sempre atualizar a variável teste
  teste = inputCalculadora.value.split("");

  //Parte que coloca os números no input
  switch (event.target.id) {
    case "1":
      inputCalculadora.value += 1;
      break;
    case "2":
      inputCalculadora.value += 2;
      break;
    case "3":
      inputCalculadora.value += 3;
      break;
    case "4":
      inputCalculadora.value += 4;
      break;
    case "5":
      inputCalculadora.value += 5;
      break;
    case "6":
      inputCalculadora.value += 6;
      break;
    case "7":
      inputCalculadora.value += 7;
      break;
    case "8":
      inputCalculadora.value += 8;
      break;
    case "9":
      inputCalculadora.value += 9;
      break;
    case "0":
      if (teste[teste.length - 1] == "/") {
      } else {
        inputCalculadora.value += 0;
      }
      break;
  }
}

/*Função que coloca os símbolos no imput da calculadora e diz o resultado da equação e faz o sistema funcionar*/
function digitarSimbolo() {

  //Sempre atualizar a variável teste
  teste = inputCalculadora.value.split("");

  //Parte que coloca os símbolos no input e faz a verificação
  switch (event.target.id) {
    case "+":
    case "-":
    case "/":
    case "*":
    case ".":
      //Verifica se são dois símbolos seguidos ou não
      if (teste[teste.length - 1] !== "+" && teste[teste.length - 1] !== "-" && teste[teste.length - 1] !== "/" && teste[teste.length - 1] && teste[teste.length - 1] !== ".") {
        inputCalculadora.value += event.target.id;
      }
      //Verifica se o primeiro botão pressionado foi * ou / e bloqueia caso seja   
      if ((teste.length == 0) && event.target.id !== "*" && event.target.id !== "/") {
        inputCalculadora.value += event.target.id;
      } else {

      }
      break;

    case "abre-parenteses":
      inputCalculadora.value += "(";
      break;
    case "fecha-parenteses":
      inputCalculadora.value += ")";
      break;

    //Parte que apaga o ultimo número
    case "C":
      teste.pop();
      inputCalculadora.value = teste.join("");
      break;

    case "AC":
      inputCalculadora.value = "";
      break;
    //Parte que coloca ponto pra números decimais

    //Parte que entrega o resultado
    case "=":

      //Verifica se o ultimo elemento do input é um símbolo, se for, ele tira pra poder fazer a conta
      if ((teste[teste.length - 1] == "+" || teste[teste.length - 1] == "-" || teste[teste.length - 1] == "/" || teste[teste.length - 1] == "*") || teste[teste.length - 1] == "(") {
        teste.pop();
        inputCalculadora.value = math.evaluate(teste.join(""));
      } else {
        inputCalculadora.value = math.evaluate(teste.join(""));
      }

      break;
}}

/*PARTE DESTINADA A COLOCAR AS FUNÇÕES NOS BOTÕES DESTINADOS A ELAS*/

//Botões das abas
botaoAbaVel.addEventListener("click", mostrar);
botaoAbaTem.addEventListener("click", mostrar2);
botaoAbaDis.addEventListener("click", mostrar3);

//Botões dos cálculos
botaoCalc_I.addEventListener("click", calc_vel);
botaoCalc_II.addEventListener("click", calc_tem);
botaoCalc_III.addEventListener("click", calc_distancia);

//Botâo que faz o enter do teclado funcionar
window.addEventListener("keypress", enter);

//Botões que fazem os resets funcionarem
reset_I.addEventListener("click", resetar);
reset_II.addEventListener("click", resetar);
reset_III.addEventListener("click", resetar);

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
ponto.addEventListener("click", digitarSimbolo)