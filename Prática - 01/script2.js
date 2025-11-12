// Armazena a mensagem inicial para resetar facilmente
const initialMessageHTML = '<p id="initial-message">Aguardando sua interação... Clique em "Chamar Boas-Vindas" para iniciar.</p>';

function inicio() {
    let nome = prompt("Qual é o seu nome?");
    let idade = prompt("Quantos anos você tem?");
    let interesse = prompt("Qual é o seu interesse principal (ex: Tecnologia, Design, Marketing)?");

    if (nome && idade && interesse) { 
        let mensagemBoasVindas = `
            <p>Seja bem-vindo(a), <strong>${nome}</strong>! Que legal ter você por aqui.
            Com seus <strong>${idade}</strong> anos, e seu interesse em <strong>${interesse}</strong>,
            temos certeza de que vai gostar do nosso conteúdo. Explore o site!</p>
        `;

        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = mensagemBoasVindas;

    } else {
        alert("Ops! Parece que você não forneceu todas as informações. Por favor, tente novamente.");
    }
}

/**
 * Função para limpar a seção de resultados, restaurando a mensagem inicial.
 */
function limparResultado() {
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = initialMessageHTML;
}
