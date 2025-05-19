const tela = document.getElementById('tela');
const botoes = document.querySelectorAll('.botoes button');
let expressao = '';

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valor = botao.textContent;

    if (valor === 'C') {
      // Limpar tudo
      expressao = '';
      tela.textContent = '0';
      return;
    }

    if (valor === '=') {
      try {
        // Avaliar a expressão com eval (cuidado em apps reais!)
        const resultado = eval(expressao);
        tela.textContent = resultado;
        expressao = resultado.toString();
      } catch (e) {
        tela.textContent = 'Erro';
        expressao = '';
      }
      return;
    }

    // Evita que o display comece com operadores inválidos
    const operadores = ['+', '-', '*', '/'];

    if (
      operadores.includes(valor) &&
      (expressao === '' || operadores.includes(expressao.slice(-1)))
    ) {
      // Não adiciona operador no começo nem operador seguido de operador
      return;
    }

    // Atualiza a expressão e a tela
    expressao += valor;
    tela.textContent = expressao;
  });
});
