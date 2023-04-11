const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />'
const atividades = [];
const notas = [];
const spamAprovado = '<spam class="resultado aprovado">aprovado</spam>';
const spamReprovado = '<spam class="resultado reprovado">reprovado</spam>';
const notaMinima = parseFloat(prompt('digite a nota minima: '));


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    atualizaMedia();
})

function adcionaLinha() {
    const inputNome = document.getElementById('form-nome');
    const inputNota = document.getElementById('form-nota');

    if (atividades.includes(inputNome.value)) {
        alert(`a atividades: ${inputNome.value} já foi inserida`);
    } else {
    atividades.push(inputNome.value);
    notas.push(parseFloat(inputNota.value));

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >=7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</td>'

    linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputNota.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;
}

function calculaMedia() {
    let somaNotas = 0;

    for (let i = 0; i< notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}