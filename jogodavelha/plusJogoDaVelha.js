let jogadorAtual = "X";
let jogadores = { X: "", O: "" };
let placar = { X: 0, O: 0 };
let jogoAtivo = false;

function montarTabuleiro() {
  const tabuleiro = document.getElementById("tabuleiro");
  tabuleiro.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const celula = document.createElement("div");
    celula.setAttribute("class", "celula");
    celula.setAttribute("data-index", i);
    celula.addEventListener("click", marcarCelula);
    tabuleiro.appendChild(celula);
  }

}
function iniciarJogo() {
  jogadores.X = document.getElementById("id_input1").value || 'Jogador X';
  jogadores.O = document.getElementById("id_input2").value || 'Jogador O';
  jogoAtivo = true;
  jogadorAtual = "X";
  montarTabuleiro();
  atualizarPlacar()
  //document.getElementById("mensagem").textContent = "";
}

function marcarCelula(e) {
  if (!jogoAtivo) return;

  const celula = e.target;
  if (celula.textContent !== "") return;

  celula.textContent = jogadorAtual;

  if (verificarVitoria()) {
    jogoAtivo = false;
    document.getElementById("texto-alerta").textContent = `${jogadores[jogadorAtual]} venceu!`;
    document.getElementById("alerta-vitoria").style.display = "block";
    placar[jogadorAtual]++;
    atualizarPlacar();
    return;
  }
  
  if (Array.from(document.querySelectorAll(".celula")).every(c => c.textContent !== "")) {
    document.getElementById("texto-alerta").textContent = 'Empate!';
    document.getElementById("alerta-vitoria").style.display = "block";
    jogoAtivo = false;
    return;
  }
  
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function fecharAlerta() {
  document.getElementById("alerta-vitoria").style.display = "none";
}
function atualizarPlacar() {
  document.getElementById("placarX").textContent = `Vitórias de ${jogadores.X}: ${placar.X}`;
  document.getElementById("placarO").textContent = `Vitórias de ${jogadores.O}: ${placar.O}`;
}

function verificarVitoria() {
  const combinacoes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const celulas = document.querySelectorAll(".celula");

  return combinacoes.some(([a, b, c]) =>
    celulas[a].textContent === jogadorAtual &&
    celulas[b].textContent === jogadorAtual &&
    celulas[c].textContent === jogadorAtual
  );
}

function reiniciarPartida() {
  if (!jogadores.X || !jogadores.O) return;
  jogoAtivo = true;
  jogadorAtual = "X";
  montarTabuleiro();
}
