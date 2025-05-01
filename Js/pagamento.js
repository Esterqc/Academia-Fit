function mostrarFormularioPagamento() {
    const metodo = document.getElementById('metodoPagamento').value;
    
    document.getElementById('formCartao').style.display = 'none';
    document.getElementById('formPix').style.display = 'none';
    document.getElementById('formDebito').style.display = 'none';
  
    if (metodo === 'cartao') {
      document.getElementById('formCartao').style.display = 'block';
    } else if (metodo === 'pix') {
      document.getElementById('formPix').style.display = 'block';
    } else if (metodo === 'debito') {
      document.getElementById('formDebito').style.display = 'block';
    }
  }
  
  // Redirecionar para a tela de confirmação
  function confirmarPagamento() {
    // Aqui você pode validar ou simular o processamento antes do redirecionamento
    window.location.href = "../Html/confirmacao.html";
  }
  