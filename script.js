// Função para gerar um mock de dados
function gerarMock() {
    // Ano (YYYY) com 4 dígitos
    const ano = new Date().getFullYear();

    // Array com os nomes dos meses
    const meses = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    // Mês (sem abreviação)
    const mes = meses[new Date().getMonth()];

    // Percentual (um número aleatório entre 0 e 100)
    const percentual = Math.random() * 100;

    // Retornar o objeto mock
    return {
        ano,
        mes,
        percentual
    };
}

// Exemplo de uso
const mockData = gerarMock();
console.log(mockData);
