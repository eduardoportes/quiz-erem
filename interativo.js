/* =========================================================
   Modo interativo na tela. Reaproveita o banco de perguntas e as
   funções de pontuação do script.js (modo clássico com prompt).
   ========================================================= */

const $ = (id) => document.getElementById(id);

// Diagnóstico: avisa na tela se algum arquivo faltar ou der erro.
(function diagnostico() {
  const aviso = (texto) => {
    let d = document.getElementById("avisoErro");
    if (!d) {
      d = document.createElement("div");
      d.id = "avisoErro";
      d.style.cssText = "position:fixed;left:0;right:0;bottom:0;z-index:99;background:#e5484d;color:#fff;padding:12px 16px;font:14px system-ui";
      document.body.appendChild(d);
    }
    d.textContent = texto;
  };
  const necessarios = [
    "perguntas", "TOTAL_RODADA", "CHAVE_STORAGE", "validarEntrada", "formatarPontos",
    "calcularAproveitamento", "selecionarPerguntasDaRodada", "calcularPontuacao", "obterMensagem", "salvarResultado", "iniciarPrograma"
  ];
  const faltando = necessarios.filter((nome) => {
    try { return typeof eval(nome) === "undefined"; } catch (e) { return true; }
  });
  if (faltando.length > 0) {
    aviso("O script.js está ausente ou desatualizado (faltando: " + faltando.join(", ") + "). Use o script.js mais recente enviado no chat, na mesma pasta do index.html.");
  }
  window.addEventListener("error", (e) => aviso("Erro no quiz: " + e.message));
})();

let jogo = null; // estado da partida em andamento

// ---------- Navegação entre telas ----------
function mostrar(id) {
  document.querySelectorAll(".tela").forEach((t) => { t.hidden = t.id !== id; });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---------- HOME ----------
function lerResultados() {
  try { return JSON.parse(localStorage.getItem(CHAVE_STORAGE) || "[]"); }
  catch (e) { return []; }
}

function personalidadesUnicas() {
  const vistos = new Set();
  return perguntas.filter((p) => {
    if (vistos.has(p.personalidade)) return false;
    vistos.add(p.personalidade);
    return true;
  });
}

function desenharCartoes(filtro) {
  const termo = (filtro || "").trim().toLowerCase();
  const lista = personalidadesUnicas().filter((p) => p.personalidade.toLowerCase().includes(termo));
  const grade = $("grade");
  grade.innerHTML = "";
  if (lista.length === 0) {
    grade.innerHTML = '<div class="vazio">Nenhuma personalidade encontrada.</div>';
    return;
  }
  lista.forEach((p) => {
    const b = document.createElement("button");
    b.className = "flip";
    b.type = "button";
    b.innerHTML =
      '<div class="flip-in">' +
      '<div class="face frente"></div>' +
      '<div class="face verso"></div></div>';
    const frente = b.querySelector(".frente");
    const nome = document.createElement("span");
    nome.textContent = p.personalidade;
    const dica = document.createElement("small");
    dica.textContent = "toque para ver";
    frente.append(nome, dica);
    b.querySelector(".verso").textContent = p.explicacao;
    b.addEventListener("click", () => b.classList.toggle("virado"));
    grade.appendChild(b);
  });
}

function desenharRanking() {
  const lista = $("ranking");
  const dados = lerResultados().sort((a, b) => b.pontuacao - a.pontuacao).slice(0, 5);
  lista.innerHTML = "";
  if (dados.length === 0) {
    lista.innerHTML = '<div class="vazio">Ainda não há partidas. Seja a primeira pessoa a jogar!</div>';
    return;
  }
  dados.forEach((r, i) => {
    const li = document.createElement("li");
    const pos = document.createElement("span"); pos.className = "pos"; pos.textContent = i + 1 + "º";
    const nome = document.createElement("span"); nome.className = "nome";
    nome.textContent = r.grupo + " ";
    const turma = document.createElement("small"); turma.textContent = "(" + r.turma + ")";
    nome.appendChild(turma);
    const pts = document.createElement("b"); pts.textContent = formatarPontos(r.pontuacao) + " pts";
    li.append(pos, nome, pts);
    lista.appendChild(li);
  });
}

// Contador animado
function animarNumero(el, alvo, duracao) {
  const inicio = performance.now();
  function passo(agora) {
    const t = Math.min((agora - inicio) / duracao, 1);
    el.textContent = Math.round(alvo * t);
    if (t < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

function prepararHome() {
  desenharCartoes("");
  desenharRanking();
  animarNumero($("cPerguntas"), perguntas.length, 900);
  animarNumero($("cPersonalidades"), personalidadesUnicas().length, 900);
  animarNumero($("cJogos"), lerResultados().length, 900);
}

// ---------- CADASTRO ----------
function validarCadastro() {
  const nome = $("nome").value;
  const turma = $("turma").value;
  const nomeOk = validarEntrada(nome);
  const turmaOk = validarEntrada(turma);
  $("erroNome").textContent = nomeOk ? "" : "Informe o nome do grupo ou participante.";
  $("erroTurma").textContent = turmaOk ? "" : "Informe a turma.";
  $("nome").classList.toggle("invalido", !nomeOk);
  $("turma").classList.toggle("invalido", !turmaOk);
  return nomeOk && turmaOk;
}

// ---------- QUIZ ----------
function iniciarPartida(participante) {
  jogo = {
    participante,
    rodada: selecionarPerguntasDaRodada(),
    indice: 0,
    pontos: 0,
    acertos: 0,
    erros: 0,
    historico: [],
    respondida: false
  };
  mostrar("tela-quiz");
  mostrarPergunta();
}

function mostrarPergunta() {
  const p = jogo.rodada[jogo.indice];
  jogo.respondida = false;
  $("pPergunta").textContent = `Pergunta ${jogo.indice + 1}/${TOTAL_RODADA}`;
  $("pPontos").textContent = formatarPontos(jogo.pontos);
  $("pAcertos").textContent = jogo.acertos;
  $("barraProg").style.width = (jogo.indice / TOTAL_RODADA) * 100 + "%";
  $("textoPergunta").textContent = p.pergunta;
  $("feedback").innerHTML = "";
  $("prox").hidden = true;

  const caixa = $("opcoes");
  caixa.innerHTML = "";
  p.alternativas.forEach((alt, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "opcao";
    const n = document.createElement("span"); n.className = "num"; n.textContent = i + 1;
    const t = document.createElement("span"); t.textContent = alt;
    b.append(n, t);
    b.addEventListener("click", () => responder(i));
    caixa.appendChild(b);
  });

}

function responder(escolha) {
  if (!jogo || jogo.respondida) return;
  jogo.respondida = true;

  const p = jogo.rodada[jogo.indice];
  const acertou = escolha === p.respostaCorreta;
  const pontos = calcularPontuacao(acertou);
  jogo.pontos += pontos;
  if (acertou) jogo.acertos++; else jogo.erros++;
  jogo.historico.push({
    id: p.id, personalidade: p.personalidade, respostaEscolhida: escolha + 1,
    acertou, pontos
  });

  const botoes = document.querySelectorAll(".opcao");
  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === p.respostaCorreta) b.classList.add("certa");
    else if (i === escolha) b.classList.add("errada");
  });

  const fb = document.createElement("div");
  fb.className = "feedback " + (acertou ? "ok" : "no");
  const titulo = document.createElement("div");
  if (acertou) {
    titulo.className = "ganhou";
    titulo.textContent = `Parabéns! +${formatarPontos(pontos)} pontos`;
  } else {
    titulo.innerHTML = "<b>Não foi dessa vez!</b>";
  }
  const info = document.createElement("div");
  info.style.marginTop = "6px";
  const nomeP = document.createElement("b");
  nomeP.textContent = p.personalidade + ": ";
  info.append(nomeP, p.explicacao);
  fb.append(titulo, info);
  $("feedback").appendChild(fb);

  $("pPontos").textContent = formatarPontos(jogo.pontos);
  $("pAcertos").textContent = jogo.acertos;
  $("barraProg").style.width = ((jogo.indice + 1) / TOTAL_RODADA) * 100 + "%";

  const ultima = jogo.indice === TOTAL_RODADA - 1;
  $("btnProx").textContent = ultima ? "Ver resultado" : "Próxima";
  $("prox").hidden = false;
  $("btnProx").focus();
}

function avancar() {
  if (!jogo || !jogo.respondida) return;
  jogo.indice++;
  if (jogo.indice >= TOTAL_RODADA) {
    terminarPartida();
  } else {
    mostrarPergunta();
  }
}

// ---------- FINAL ----------
function confete() {
  const cores = ["#f2b630", "#ff7ac6", "#2fbf71", "#6aa9ff", "#ffffff"];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement("div");
    c.className = "confete";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = cores[i % cores.length];
    c.style.animationDuration = 2 + Math.random() * 2.5 + "s";
    c.style.animationDelay = Math.random() * 0.8 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5500);
  }
}

function terminarPartida() {
  const j = jogo;
  const aproveitamento = calcularAproveitamento(j.acertos, TOTAL_RODADA);

  salvarResultado({
    data: new Date().toLocaleString("pt-BR"),
    grupo: j.participante.nomeGrupo,
    turma: j.participante.turma,
    respondidas: TOTAL_RODADA,
    acertos: j.acertos,
    erros: j.erros,
    aproveitamento,
    pontuacao: j.pontos,
    detalhes: j.historico
  });

  $("fNome").textContent = j.participante.nomeGrupo;
  $("fTurma").textContent = j.participante.turma;
  $("fAcertos").textContent = j.acertos;
  $("fErros").textContent = j.erros;
  $("fPerc").textContent = aproveitamento + "%";
  $("fMsg").textContent = obterMensagem(aproveitamento);
  animarNumero($("fPontos"), Math.round(j.pontos), 1200);
  mostrar("tela-final");
  if (aproveitamento >= 60) confete();
}

// ---------- Eventos ----------
$("btnTela").addEventListener("click", () => {
  $("erroNome").textContent = ""; $("erroTurma").textContent = "";
  mostrar("tela-cadastro");
  $("nome").focus();
});
$("btnClassico").addEventListener("click", () => iniciarPrograma());
$("btnVoltarHome").addEventListener("click", () => mostrar("tela-home"));
$("busca").addEventListener("input", (e) => desenharCartoes(e.target.value));

$("formCadastro").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validarCadastro()) return;
  iniciarPartida({ nomeGrupo: $("nome").value.trim(), turma: $("turma").value.trim() });
});

$("btnProx").addEventListener("click", avancar);
$("btnDeNovo").addEventListener("click", () => iniciarPartida(jogo.participante));
$("btnInicio").addEventListener("click", () => { prepararHome(); mostrar("tela-home"); });

document.addEventListener("keydown", (e) => {
  if ($("tela-quiz").hidden || !jogo) return;
  if (["1", "2", "3", "4"].includes(e.key) && !jogo.respondida) {
    responder(Number(e.key) - 1);
  } else if (e.key === "Enter" && jogo.respondida) {
    e.preventDefault();
    avancar();
  }
});

prepararHome();