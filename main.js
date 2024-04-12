const botoes = document.querySelectorAll(".botao");
for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {

for(let j=0;j<botoes.length;j++) 
{ botoes[j].classList.remove("ativo");
}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
textos[j].classList.remove(ativo);
}
}
const contadores = document.querySelectorAll(".contador");
contadores[0].textContent = "Contagem regressiva";
const contadores = document.querySelectorAll(".contador”);
const tempoObjetivo1 = new Date("2023-10-05T00:00:00”);
contadores[0].textContent = calculaTempo(tempoObjetivo1);
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
contadores[1].textContent = tempoObjetivo2 - tempoAtual;
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
contadores[1].textContent = tempoObjetivo2 - tempoAtual;
contadores[2].textContent = tempoObjetivo3 - tempoAtual;
contadores[3].textContent = tempoObjetivo4 - tempoAtual;
const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
