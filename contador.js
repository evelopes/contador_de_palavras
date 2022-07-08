
document.addEventListener('keydown', (event) => {
    var conteudo = document.getElementById('palavras').value;
    var palavra = conteudo.split(" ");
    var letras = conteudo.length;
    var outras = palavra.length;
    var resposta = document.getElementById("resposta");
    resposta.textContent = `Caracteres: ${letras}   -   Palavras: ${outras}`
})
