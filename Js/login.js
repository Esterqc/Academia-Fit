function login() {
    const emailLogin = document.getElementById('emailLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;
  
    // Pega o usuário cadastrado no localStorage
    const usuarioCadastrado = JSON.parse(localStorage.getItem('usuario'));
  
    if (!usuarioCadastrado) {
      alert('Nenhum usuário cadastrado!');
      return;
    }
  
    if (emailLogin === usuarioCadastrado.email && senhaLogin === usuarioCadastrado.senha) {
      alert('Login realizado com sucesso!');
      
      // Salva no localStorage o nome do usuário
      localStorage.setItem('nomeUsuario', usuarioCadastrado.nome);
      
      // Redireciona para a tela inicial
      window.location.href = 'tela.html';
    } else {
      alert('Email ou senha incorretos!');
    }
  }
  