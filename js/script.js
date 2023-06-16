function validaCPF() {
    const cpfFormatado = document.getElementById('cpf').value;

    const cpf = limpaFormatacao(cpfFormatado);

    if(cpf.length !== 11) {
        mostraResultado('Cpf deve conter 11 dígitos', 'red');
        return;
    }
}

function limpaFormatacao(cpf) {
    cpf = cpf.replace(/\D/g, '');

    return cpf;
}

function mostraResultado(texto, cor) {
    const span = document.getElementById('resultado');

    span.innerHTML = texto;
    span.style.color = cor;
}