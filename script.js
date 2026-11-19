/* =========================================================
   BLACK TECH QUIZ
   JavaScript puro: sem frameworks ou bibliotecas externas.
   ========================================================= */

// ---------- RF01: banco de perguntas (array de objetos) ----------
const perguntas = [
  {
    id: 1,
    pergunta: "Quem foi Katherine Johnson?",
    alternativas: [
      "Uma engenheira de videogames",
      "Uma matemática da NASA",
      "Uma inventora de microfones",
      "Uma cientista da computação brasileira"
    ],
    respostaCorreta: 1,
    personalidade: "Katherine Johnson",
    explicacao: "Seus cálculos de trajetória foram fundamentais para missões espaciais da NASA, como a de John Glenn em órbita."
  },
  {
    id: 2,
    pergunta: "Qual foi a principal contribuição de Dorothy Vaughan na NASA?",
    alternativas: [
      "Projetou o primeiro foguete lunar",
      "Criou o sistema GPS",
      "Aprendeu FORTRAN e liderou programadoras dos computadores eletrônicos",
      "Inventou o semáforo"
    ],
    respostaCorreta: 2,
    personalidade: "Dorothy Vaughan",
    explicacao: "Dorothy foi supervisora de matemáticas e se tornou especialista em FORTRAN, preparando sua equipe para a era dos computadores eletrônicos."
  },
  {
    id: 3,
    pergunta: "Mary Jackson ficou conhecida na história da NASA por ser:",
    alternativas: [
      "A primeira astronauta negra",
      "A primeira engenheira negra da NASA",
      "A criadora da internet",
      "A inventora do micro-ondas"
    ],
    respostaCorreta: 1,
    personalidade: "Mary Jackson",
    explicacao: "Mary Jackson superou barreiras raciais e de gênero para se tornar a primeira engenheira negra da NASA."
  },
  {
    id: 4,
    pergunta: "Gladys West contribuiu com qual tecnologia usada até hoje no celular?",
    alternativas: [
      "Wi-Fi",
      "Bluetooth",
      "GPS",
      "Tela sensível ao toque"
    ],
    respostaCorreta: 2,
    personalidade: "Gladys West",
    explicacao: "Os modelos matemáticos da forma da Terra, desenvolvidos por Gladys West, foram essenciais para o GPS."
  },
  {
    id: 5,
    pergunta: "Mark Dean é conhecido por ter:",
    alternativas: [
      "Criado a linguagem Python",
      "Fundado a Microsoft",
      "Inventado o e-mail",
      "Ajudado a criar o PC da IBM e tecnologias como o barramento ISA"
    ],
    respostaCorreta: 3,
    personalidade: "Mark Dean",
    explicacao: "Engenheiro da IBM, Mark Dean tem várias patentes fundamentais para o computador pessoal e liderou o primeiro chip de 1 GHz."
  },
  {
    id: 6,
    pergunta: "Marian Croak é pioneira em qual tecnologia?",
    alternativas: [
      "Chamadas de voz pela internet (VoIP)",
      "Carros elétricos",
      "Impressão 3D",
      "Realidade virtual"
    ],
    respostaCorreta: 0,
    personalidade: "Marian Croak",
    explicacao: "Marian Croak tem mais de 200 patentes e foi uma das pioneiras do VoIP, base de chamadas por internet."
  },
  {
    id: 7,
    pergunta: "Qual invenção é atribuída a Alan Emtage?",
    alternativas: [
      "O primeiro mouse",
      "O Archie, considerado o primeiro mecanismo de busca da internet",
      "O primeiro navegador gráfico",
      "O pen drive"
    ],
    respostaCorreta: 1,
    personalidade: "Alan Emtage",
    explicacao: "Alan Emtage, nascido em Barbados, criou o Archie em 1990, precursor dos buscadores modernos."
  },
  {
    id: 8,
    pergunta: "Lewis Latimer contribuiu para a tecnologia da:",
    alternativas: [
      "Televisão a cores",
      "Lâmpada elétrica, com o filamento de carbono",
      "Máquina de lavar",
      "Fibra óptica"
    ],
    respostaCorreta: 1,
    personalidade: "Lewis Latimer",
    explicacao: "Latimer aperfeiçoou o filamento de carbono das lâmpadas, tornando-as mais duráveis, e também fez desenhos técnicos da patente do telefone."
  },
  {
    id: 9,
    pergunta: "Garrett Morgan inventou:",
    alternativas: [
      "O sinal de trânsito de três posições",
      "O computador portátil",
      "O telefone celular",
      "O satélite artificial"
    ],
    respostaCorreta: 0,
    personalidade: "Garrett Morgan",
    explicacao: "Garrett Morgan patenteou um sinal de trânsito com posição de alerta e também criou um capuz de proteção contra fumaça, precursor da máscara de gás."
  },
  {
    id: 10,
    pergunta: "Otis Boykin criou componentes eletrônicos usados em:",
    alternativas: [
      "Fornos de pizza",
      "Marca-passos e computadores",
      "Bicicletas",
      "Câmeras analógicas apenas"
    ],
    respostaCorreta: 1,
    personalidade: "Otis Boykin",
    explicacao: "Otis Boykin desenvolveu resistores de precisão usados em computadores e em marca-passos."
  },
  {
    id: 11,
    pergunta: "Frederick McKinley Jones é famoso por inventar:",
    alternativas: [
      "O ar-condicionado de carro",
      "O sistema de refrigeração para transporte de alimentos",
      "O rádio portátil",
      "O microscópio eletrônico"
    ],
    respostaCorreta: 1,
    personalidade: "Frederick McKinley Jones",
    explicacao: "Sua unidade de refrigeração para caminhões e trens revolucionou o transporte de alimentos e medicamentos."
  },
  {
    id: 12,
    pergunta: "Quem foi Enedina Alves Marcondes?",
    alternativas: [
      "Primeira engenheira negra do Brasil",
      "Primeira presidente da NASA",
      "Criadora do Pix",
      "Inventora do Wi-Fi"
    ],
    respostaCorreta: 0,
    personalidade: "Enedina Alves Marcondes",
    explicacao: "Formada em Engenharia Civil no Paraná em 1945, Enedina participou de obras importantes como o Plano Hidrelétrico do Paraná."
  },
  {
    id: 13,
    pergunta: "André Rebouças, engenheiro brasileiro do século XIX, ficou conhecido por:",
    alternativas: [
      "Inventar o avião",
      "Projetar obras portuárias, como as docas do Rio de Janeiro",
      "Criar o telégrafo",
      "Fundar uma empresa de software"
    ],
    respostaCorreta: 1,
    personalidade: "André Rebouças",
    explicacao: "Rebouças foi engenheiro e inventor, responsável por obras de infraestrutura e defensor da abolição da escravidão."
  },
  {
    id: 14,
    pergunta: "Sônia Guimarães é reconhecida por ser:",
    alternativas: [
      "Primeira astronauta brasileira",
      "Criadora do WhatsApp",
      "Primeira mulher negra doutora em Física no Brasil",
      "Inventora do código QR"
    ],
    respostaCorreta: 2,
    personalidade: "Sônia Guimarães",
    explicacao: "Professora do ITA, Sônia Guimarães é referência em física de materiais e na inclusão de mulheres negras na ciência."
  },
  {
    id: 15,
    pergunta: "Joy Buolamwini fundou a Algorithmic Justice League para combater:",
    alternativas: [
      "Falta de energia em data centers",
      "Pirataria de software",
      "Vírus de computador",
      "Vieses em sistemas de inteligência artificial, como o reconhecimento facial"
    ],
    respostaCorreta: 3,
    personalidade: "Joy Buolamwini",
    explicacao: "Sua pesquisa mostrou que sistemas de reconhecimento facial erravam mais com pessoas negras, impulsionando debates sobre ética em IA."
  },
  {
    id: 16,
    pergunta: "Timnit Gebru é uma pesquisadora conhecida por seu trabalho em:",
    alternativas: [
      "Ética e vieses na inteligência artificial",
      "Construção de pontes",
      "Design de jogos",
      "Fabricação de chips"
    ],
    respostaCorreta: 0,
    personalidade: "Timnit Gebru",
    explicacao: "Timnit Gebru estuda os impactos sociais da IA e fundou o instituto DAIR para uma IA mais justa."
  },
  {
    id: 17,
    pergunta: "Lisa Gelobter trabalhou com qual tecnologia da internet?",
    alternativas: [
      "Satélites de comunicação",
      "Animações web (Shockwave) e vídeo na internet",
      "Impressoras a laser",
      "Computadores quânticos"
    ],
    respostaCorreta: 1,
    personalidade: "Lisa Gelobter",
    explicacao: "Lisa Gelobter participou do desenvolvimento do Shockwave e de plataformas de vídeo online, e depois atuou em tecnologia no governo dos EUA."
  }
];

// ---------- Constantes de regras ----------
const TOTAL_RODADA = 10;
const PONTOS_BASE = 100; // cada acerto vale 100 pontos (sem bônus de tempo)
const CHAVE_STORAGE = "blackTechQuizResultados";

// ---------- Funções auxiliares (arrow functions) ----------
const validarEntrada = (valor) => valor !== null && valor.trim() !== "";
const formatarPontos = (n) => Number.isInteger(n) ? String(n) : n.toFixed(1);
const calcularAproveitamento = (acertos, total) =>
  total === 0 ? 0 : Math.round((acertos / total) * 100);

// Pede um texto obrigatório. Retorna null se o usuário cancelar e confirmar a saída.
function pedirTexto(mensagem) {
  while (true) {
    const valor = prompt(mensagem);
    if (valor === null) {
      if (confirm("Deseja realmente encerrar o quiz?")) {
        return null;
      }
      continue;
    }
    if (validarEntrada(valor)) {
      return valor.trim();
    }
    alert("Este campo é obrigatório. Tente novamente.");
  }
}

// Pede um número entre min e max. Retorna null se cancelar e confirmar a saída.
function pedirNumero(mensagem, min, max, apenasInteiro) {
  while (true) {
    const valor = prompt(mensagem);
    if (valor === null) {
      if (confirm("Deseja realmente encerrar o quiz?")) {
        return null;
      }
      continue;
    }
    const numero = Number(valor.trim().replace(",", "."));
    const formatoOk = validarEntrada(valor) && Number.isFinite(numero);
    const inteiroOk = !apenasInteiro || Number.isInteger(numero);
    if (formatoOk && inteiroOk && numero >= min && numero <= max) {
      return numero;
    }
    alert(`Valor inválido. Digite um número entre ${min} e ${max}.`);
  }
}

// ---------- RF02: cadastro do participante ----------
function cadastrarParticipante() {
  const nomeGrupo = pedirTexto("Digite o nome do seu grupo ou participante:");
  if (nomeGrupo === null) return null;

  const turma = pedirTexto("Informe sua turma:");
  if (turma === null) return null;

  console.log("Participante:", nomeGrupo);
  console.log("Turma:", turma);
  return { nomeGrupo, turma };
}

// ---------- RF03: embaralhar (Fisher-Yates) e selecionar ----------
function embaralharPerguntas(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function selecionarPerguntasDaRodada() {
  const sorteadas = embaralharPerguntas(perguntas).slice(0, TOTAL_RODADA);
  const ids = sorteadas.map((p) => p.id);                 // map()
  return ids.map((id) => perguntas.find((p) => p.id === id)); // find()
}

// ---------- RF04: exibir pergunta e validar resposta ----------
function exibirPergunta(pergunta, numero) {
  console.log(`\nPergunta ${numero}/${TOTAL_RODADA}: ${pergunta.pergunta}`);
  pergunta.alternativas.forEach((alt, i) => console.log(`  ${i + 1} - ${alt}`));

  const texto =
    `Pergunta ${numero} de ${TOTAL_RODADA}\n\n${pergunta.pergunta}\n\n` +
    pergunta.alternativas.map((alt, i) => `${i + 1} - ${alt}`).join("\n") +
    "\n\nDigite o número da sua resposta (1 a 4):";

  return validarResposta(texto);
}

function validarResposta(texto) {
  return pedirNumero(texto, 1, 4, true);
}

// ---------- Pontuação (sem tempo): acerto = 100 pontos ----------
function calcularPontuacao(acertou) {
  return acertou ? PONTOS_BASE : 0;
}

// ---------- RF09: mensagem por desempenho ----------
function obterMensagem(aproveitamento) {
  if (aproveitamento === 100) {
    return "Conhecimento extraordinário! Você mostrou que conhece grandes nomes que transformaram o mundo!";
  } else if (aproveitamento >= 80) {
    return "Excelente! Você demonstrou um ótimo conhecimento sobre a história da tecnologia.";
  } else if (aproveitamento >= 60) {
    return "Muito bem! Você reconhece importantes protagonistas da ciência e da inovação.";
  } else if (aproveitamento >= 40) {
    return "Você já conhece algumas contribuições importantes. Continue explorando a história da tecnologia!";
  }
  return "Sua jornada de descobertas está apenas começando! Continue conhecendo essas grandes personalidades.";
}

// ---------- RF06 / RF07: controle da rodada ----------
function iniciarQuiz() {
  const rodada = selecionarPerguntasDaRodada();
  const historico = [];
  let pontuacao = 0;
  let acertos = 0;
  let erros = 0;
  let numeroPergunta = 0;

  while (numeroPergunta < TOTAL_RODADA) {
    const pergunta = rodada[numeroPergunta];

    const resposta = exibirPergunta(pergunta, numeroPergunta + 1);
    if (resposta === null) return null;

    const acertou = resposta - 1 === pergunta.respostaCorreta;
    const pontos = calcularPontuacao(acertou);
    pontuacao += pontos;

    if (acertou) {
      acertos++;
      console.log("Parabéns! Você acertou!");
      console.log(pergunta.explicacao);
      alert(
        `Parabéns! Você acertou!\n+${formatarPontos(pontos)} pontos\n\n` +
        `${pergunta.personalidade}: ${pergunta.explicacao}`
      );
    } else {
      erros++;
      const correta = pergunta.alternativas[pergunta.respostaCorreta];
      console.log("Não foi dessa vez!");
      console.log("A resposta correta era: " + correta);
      console.log(pergunta.explicacao);
      alert(
        `Não foi dessa vez!\nA resposta correta era: ${correta}\n\n` +
        `${pergunta.personalidade}: ${pergunta.explicacao}`
      );
    }

    historico.push({
      id: pergunta.id,
      personalidade: pergunta.personalidade,
      respostaEscolhida: resposta,
      acertou,
      pontos
    });

    numeroPergunta++;
  }

  return { pontuacao, acertos, erros, numeroPergunta, historico };
}

// ---------- Salvar resultado no navegador (para o painel de resultados) ----------
function salvarResultado(registro) {
  try {
    const salvos = JSON.parse(localStorage.getItem(CHAVE_STORAGE) || "[]");
    salvos.push(registro);
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(salvos));
    return true;
  } catch (erro) {
    console.warn("Não foi possível salvar o resultado:", erro);
    return false;
  }
}

// ---------- RF08: resultado final ----------
function finalizarQuiz(participante, estado) {
  const aproveitamento = calcularAproveitamento(estado.acertos, estado.numeroPergunta);
  const mensagem = obterMensagem(aproveitamento);
  const revisar = estado.historico.filter((h) => !h.acertou); // filter()

  const resumo =
    "===== BLACK TECH QUIZ - QUIZ FINALIZADO =====\n" +
    `Participante: ${participante.nomeGrupo}\n` +
    `Turma: ${participante.turma}\n` +
    `Perguntas respondidas: ${estado.numeroPergunta}\n` +
    `Acertos: ${estado.acertos}\n` +
    `Erros: ${estado.erros}\n` +
    `Aproveitamento: ${aproveitamento}%\n` +
    `Pontuação total: ${formatarPontos(estado.pontuacao)} pontos\n\n` +
    mensagem;

  console.log(resumo);
  if (revisar.length > 0) {
    console.log("Para revisar:", revisar.map((h) => h.personalidade).join(", "));
  }
  alert(resumo);

  salvarResultado({
    data: new Date().toLocaleString("pt-BR"),
    grupo: participante.nomeGrupo,
    turma: participante.turma,
    respondidas: estado.numeroPergunta,
    acertos: estado.acertos,
    erros: estado.erros,
    aproveitamento,
    pontuacao: estado.pontuacao,
    detalhes: estado.historico
  });
}

// ---------- Programa principal ----------
function iniciarPrograma() {
  const participante = cadastrarParticipante();
  if (participante === null) {
    alert("Cadastro cancelado. Volte quando quiser participar!");
    return;
  }

  alert(
    `Bem-vindo(a) ao Black Tech Quiz, ${participante.nomeGrupo}!\n\n` +
    `Você responderá ${TOTAL_RODADA} perguntas sobre personalidades negras da ciência e da tecnologia.\n` +
    "Cada acerto vale 100 pontos. Sem pressa, aproveite para aprender!"
  );

  const estado = iniciarQuiz();
  if (estado === null) {
    alert("Quiz encerrado antes do fim. Esta participação não foi registrada.");
    return;
  }

  finalizarQuiz(participante, estado);
}