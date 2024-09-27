const formulario = document.getElementById('formularioContato');
const tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);
    const celulaAcoes = novaLinha.insertCell(2);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    const botaoDeletar = document.createElement('button');
    botaoDeletar.textContent = 'Deletar';
    botaoDeletar.style.backgroundColor = '#ff6347';
    botaoDeletar.style.color = 'white';
    botaoDeletar.style.border = 'none';
    botaoDeletar.style.padding = '5px 10px';
    botaoDeletar.style.cursor = 'pointer';

    botaoDeletar.addEventListener('click', function() {
        tabela.deleteRow(novaLinha.rowIndex - 1);
    });

    celulaAcoes.appendChild(botaoDeletar);

    formulario.reset();
});
