/*==================================== PEGAR ELEMENTOS DO HTML ====================================*/

//Parte que pega o ID dos elementos do HTML que vão controlar a movimentações entre as partes da página

const botaoAbaVel = document.getElementById("velocidade");
const botaoAbaTem = document.getElementById("tempo");
const botaoAbaDis = document.getElementById("distancia");

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

/*====================== CRIAÇÃO DAS FUNÇÕES DOS BOTÕES E DOS CÁLCULOS ======================*/

/*FUNÇÔES QUE CONTROLAM AS PÁGINAS*/

//Config da parte de velocidade
function mostrar() {
  if (parte_I.style.display == "none") {
    parte_I.style.display = "block";
    parte_II.style.display = "none";
    parte_III.style.display = "none";
  } else {
    parte_I.style.display = "none";
  }

  if (parte_II.style.display == "block" || parte_III.style.display == "block") {
    parte_I.style.display = "block";
    parte_II.style.display = "none";
    parte_III.style.display = "none";
  }
}

//Config da parte de tempo
function mostrar2() {
  if (parte_II.style.display == "none") {
    parte_II.style.display = "block";
  } else {
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
  if (parte_III.style.display == "none") {
    parte_III.style.display = "block";
  } else {
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