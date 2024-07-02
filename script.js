// Obtém o elemento HTML com o ID 'formularioAtividade' e o armazena na variável 'formularioAtividade'. 
const formularioAtividade = document.getElementById('formularioAtividade');
const imagemAprovado = '<img src="./imagens/aprovado.png" alt="Emoji celebrando"/>';
const imagemReprovado = '<img src="./imagens/reprovado.png" alt="Emoji desepcionado"/>';

const notas = [];
const atividades = [];

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

const notaMinima = prompt('Qual é a nota minima para Aprovação?');


// Inicializa uma string vazia que armazenará as linhas adicionadas à tabela
let linhasAdicionadasTabela = '';



// Cria um escutador do evento submit e executa esse bloco de código quando escutado.   
formularioAtividade.addEventListener('submit', function(evento) {
    
    // Remove o comportamento padrão do formulário de recarregar quando submetido.
    evento.preventDefault();
    adicionarLinha();
    atualizarTabela();
    atualizarMediaFinal();

    

    

});



function adicionarLinha(){
    // Obtém o elemento HTML com o ID 'nomeDaAtividade' e o armazena na variável 'inputAtividade'. 
    const inputAtividade = document.getElementById('nomeDaAtividade');
    // Obtém o elemento HTML com o ID 'notaAtividade' e o armazena na variável 'inputNotaAtividade'. 
    const inputNotaAtividade = document.getElementById('notaAtividade');
    
    if(atividades.includes(inputAtividade.value.toLowerCase())){
        alert(`A atividade: ${inputAtividade.value} já foi inserida.`);
    }
    else{

        notas.push(parseInt(inputNotaAtividade.value));
        atividades.push(inputAtividade.value.toLowerCase());

        // Inicializa a string com a abertura de uma linha de tabela
        let linhaAdicionada = '<tr>';
        // Adiciona uma célula contendo o valor do campo de entrada da atividade
        linhaAdicionada += `<td>${inputAtividade.value}</td>`;
        // Adiciona uma célula contendo o valor do campo de entrada da nota da atividade
        linhaAdicionada += `<td>${inputNotaAtividade.value}</td>`;
        // Adiciona uma célula contendo "Aprovado" se a nota for maior ou igual a 7, e "Reprovado" caso contrário
        linhaAdicionada += `<td>${inputNotaAtividade.value >= notaMinima ? imagemAprovado : imagemReprovado}</td>`;
        // Fecha a linha de tabela
        linhaAdicionada += '</tr>';

        // Adiciona a linha criada à string que armazena todas as linhas da tabela
        linhasAdicionadasTabela = linhasAdicionadasTabela + linhaAdicionada;
        
    }
    

    // Limpa os valores dos inputs 
    inputAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela(){
    // Obtém o elemento <tbody> da tabela
    const corpoTabela = document.querySelector('tbody');
    // Insere as linhas adicionadas no corpo da tabela
    corpoTabela.innerHTML = linhasAdicionadasTabela;
}

function atualizarMediaFinal(){
    
    const mediaFinal = calcularMediaFinal();

    document.getElementById('valorMediaFinal').innerHTML = mediaFinal !== Math.floor(mediaFinal) ? mediaFinal.toFixed(2) : mediaFinal;
    document.getElementById('statusMediaFinal').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calcularMediaFinal(){   

    let somaDasNotas = 0;     
    
    for(let i = 0; i < notas.length; i++){
        somaDasNotas = (somaDasNotas + notas[i]);
    }

    return somaDasNotas / notas.length;
}




