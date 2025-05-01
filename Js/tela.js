document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('usuarioLogado');
  
    if (!email) {
      console.log("Usuário não logado - modo visitante.");
      return;
    }
  
    const dadosUsuario = JSON.parse(localStorage.getItem(email));
  
    if (!dadosUsuario) {
      alert("Usuário não encontrado.");
      return;
    }
  
    const nome = dadosUsuario.nome;
    const plano = dadosUsuario.plano;
  
    const primeiraLetra = nome.charAt(0).toUpperCase();
    document.getElementById('userInitial').textContent = primeiraLetra;
  
    if (!plano) {
      alert("Você ainda não tem um plano ativo. Escolha um agora!");
      window.location.href = 'planos.html';
      return;
    }
  
    const todasAsCards = document.querySelectorAll('.plan-card');
    todasAsCards.forEach(card => card.style.display = 'none');
  
    if (plano === 'Básico') {
      document.querySelector('.plan-card.basic').style.display = 'block';
    } else if (plano === 'Premium') {
      document.querySelector('.plan-card.basic').style.display = 'block';
      document.querySelector('.plan-card.premium').style.display = 'block';
    } else if (plano === 'VIP') {
      todasAsCards.forEach(card => card.style.display = 'block');
    }
  
    document.querySelector('.button-container').style.display = 'none';
  });
  