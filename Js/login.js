function login() {
  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  const dadosUsuario = localStorage.getItem(email);

  if (!dadosUsuario) {
    alert('Usuário não encontrado. Verifique o email ou cadastre-se.');
    return;
  }

  const usuario = JSON.parse(dadosUsuario);

  if (usuario.senha !== senha) {
    alert('Senha incorreta!');
    return;
  }

  // Salvar sessão do usuário logado
  localStorage.setItem('usuarioLogado', email);

  alert(`Bem-vindo, ${usuario.nome}!`);
  window.location.href = 'tela.html';
}
