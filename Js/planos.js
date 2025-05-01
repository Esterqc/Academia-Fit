function escolherPlano(plano) {
    let preco = '';
  
    switch (plano) {
      case 'Básico':
        preco = 'R$ 59,90';
        break;
      case 'Premium':
        preco = 'R$ 89,90';
        break;
      case 'VIP':
        preco = 'R$ 129,90';
        break;
    }
  
    localStorage.setItem('planoEscolhido', plano);
    localStorage.setItem('precoPlano', preco);
    window.location.href = 'pagamento.html';
  }
  