const planoSelect = document.getElementById('plano');
const precoPlano = document.getElementById('preco-plano');
const pagamentoSelect = document.getElementById('pagamento');
const cartaoInfo = document.getElementById('cartao-info');
const boletoInfo = document.getElementById('boleto-info');
const pixInfo = document.getElementById('pix-info');

// Mapeamento dos preços dos planos
const precos = {
  basico: "R$ 69,90/mês",
  premium: "R$ 89,90/mês",
  vip: "R$ 119,90/mês"
};

// Mostra o preço conforme plano selecionado
planoSelect.addEventListener('change', () => {
  const plano = planoSelect.value;
  precoPlano.textContent = plano ? `Preço: ${precos[plano]}` : '';
});

// Exibe campos conforme forma de pagamento
pagamentoSelect.addEventListener('change', () => {
  const tipo = pagamentoSelect.value;
  cartaoInfo.style.display = tipo === 'cartao' ? 'block' : 'none';
  boletoInfo.style.display = tipo === 'boleto' ? 'block' : 'none';
  pixInfo.style.display = tipo === 'pix' ? 'block' : 'none';
});

// Simula envio do formulário
document.querySelector('.signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Assinatura realizada com sucesso! Em breve você receberá a confirmação por e-mail.");
  this.reset();
  precoPlano.textContent = '';
  cartaoInfo.style.display = 'none';
  boletoInfo.style.display = 'none';
  pixInfo.style.display = 'none';
});
