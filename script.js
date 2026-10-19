const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const telaInicial = document.querySelector(".tela-inicial");
const iniciarBtn = document.querySelector(".iniciar-btn");

// Estrutura do Fluxograma com a propriedade 'proxima'
const perguntas = [
    {
        enunciado: "Em 2080, a humanidade começou a integrar a 'Neo-Rede'. Você recebe seu primeiro par de lentes neurais. Qual sua primeira reação?",
        alternativas: [
            {
                texto: "Conectar-se imediatamente para explorar mundos digitais.",
                afirmacao: "Mergulhou de cabeça no espaço virtual sem hesitar.",
                proxima: 1
            },
            {
                texto: "Manter o uso limitado para preservar a vida física.",
                afirmacao: "Preferiu manter os pés no chão e usar a tecnologia com cautela.",
                proxima: 2
            }
        ]
    },
    {
        enunciado: "Dentro da Neo-Rede, você descobre dados sigilosos sobre controle de memórias. O que faz?",
        alternativas: [
            {
                texto: "Expor os dados para todos.",
                afirmacao: "Tornou-se um ativista digital ao revelar a verdade.",
                proxima: 3
            },
            {
                texto: "Reportar a falha à corporação.",
                afirmacao: "Escolheu colaborar com a segurança da rede.",
                proxima: 4
            }
        ]
    },
    {
        enunciado: "No mundo real, sua cidade enfrenta crises climáticas. Qual projeto apoia?",
        alternativas: [
            {
                texto: "Construir supercomputadores de gestão energética.",
                afirmacao: "Apostou na automação total das metrópoles.",
                proxima: 5
            },
            {
                texto: "Criar fazendas verticais e domos biológicos.",
                afirmacao: "Priorizou a regeneração ambiental do planeta.",
                proxima: 6
            }
        ]
    },
    {
        enunciado: "Uma IA autônoma oferece uma aliança para reescrever o código do mundo virtual. Aceita?",
        alternativas: [
            {
                texto: "Aceitar a fusão e liderar a Neo-Rede.",
                afirmacao: "Transcendeu a biologia e tornou-se a primeira consciência digital líder.",
                proxima: undefined
            },
            {
                texto: "Recusar e defender a privacidade humana.",
                afirmacao: "Fundou um movimento para proteger a liberdade individual.",
                proxima: undefined
            }
        ]
    },
    {
        enunciado: "A corporação oferece o cargo de Arquiteto de Segurança. Qual sua diretriz?",
        alternativas: [
            {
                texto: "Implantar vigilância contínua.",
                afirmacao: "Criou a rede mais segura da história, sacrificando a privacidade.",
                proxima: undefined
            },
            {
                texto: "Criar criptografia anônima e aberta.",
                afirmacao: "Garantiu a segurança respeitando o anonimato de todos.",
                proxima: undefined
            }
        ]
    },
    {
        enunciado: "Com os supercomputadores ativos, a IA sugere substituir empregos humanos por robôs. O que decide?",
        alternativas: [
            {
                texto: "Aprovar automação com renda básica universal.",
                afirmacao: "Criou uma sociedade voltada para a arte, ciência e lazer.",
                proxima: undefined
            },
            {
                texto: "Manter empregos humanos supervisionados.",
                afirmacao: "Manteve o equilíbrio entre o trabalho humano e a eficiência sintética.",
                proxima: undefined
            }
        ]
    },
    {
        enunciado: "Os domos biológicos funcionaram. Para onde expandir a tecnologia?",
        alternativas: [
            {
                texto: "Restaurar todo o planeta Terra.",
                afirmacao: "Liderou a recuperação ecológica global.",
                proxima: undefined
            },
            {
                texto: "Usar a tecnologia para colonizar Marte.",
                afirmacao: "Tornou-se pioneiro na terraformação do planeta vermelho.",
                proxima: undefined
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

if (iniciarBtn) {
    iniciarBtn.addEventListener("click", iniciaJogo);
}

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    if (telaInicial) telaInicial.style.display = "none";
    caixaResultado.classList.remove("mostrar");
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    if (!perguntaAtual) {
        mostraResultado();
        return;
    }
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua trajetória final em 2080...";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = ""; 
    caixaResultado.classList.add("mostrar");
}