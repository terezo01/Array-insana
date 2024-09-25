const dadosPessoais = {
    'exemplo': {
        nome: 'Exemplo',
        idade: 69,
        email: 'exemplo@fiap.com.br'
    },
};

const pessoas = ['exemplo'];

adicionados = document.getElementById('adicionados');

function capitalizeFirstLetter(string) {
    if (string.length === 0) return string;  // Retorna a string se estiver vazia
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function add() {
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const emailInput = document.getElementById('email');

    const nomeP = nomeInput.value.trim().toLowerCase();
    const idadeP = parseInt(idadeInput.value);
    const emailP = emailInput.value.trim();

    if (!nomeP || isNaN(idadeP) || !emailP) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (pessoas.includes(nomeP)) {
        alert("Este nome já está cadastrado.");
        return;
    }

    pessoas.push(nomeP);
    dadosPessoais[nomeP] = {
        nome: capitalizeFirstLetter(nomeP),
        idade: idadeP,
        email: emailP
    };

    // Limpar os campos após adicionar
    nomeInput.value = '';
    idadeInput.value = '';
    emailInput.value = '';

    adicionados.innerHTML += `<br>Pessoa adicionada: ${capitalizeFirstLetter(nomeP)}`
}

function search() {
    const pesquisa = document.getElementById('pesquisa').value.trim().toLowerCase();

    const nomeB = document.getElementById('nomeB');
    const idadeB = document.getElementById('idadeB');
    const emailB = document.getElementById('emailB');

    if (pessoas.includes(pesquisa)) {
        nomeB.innerHTML = `Nome: ${dadosPessoais[pesquisa].nome}`;
        idadeB.innerHTML = `Idade: ${dadosPessoais[pesquisa].idade}`;
        emailB.innerHTML = `Email: ${dadosPessoais[pesquisa].email}`;
    } else {
        alert("Nome não encontrado.");
        nomeB.innerHTML = '';
        idadeB.innerHTML = '';
        emailB.innerHTML = '';
    }
}
