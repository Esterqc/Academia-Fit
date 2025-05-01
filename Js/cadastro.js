document.getElementById('formCadastro').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Verifica se o e-mail já foi cadastrado
  if (localStorage.getItem(email)) {
    alert('E-mail já cadastrado. Faça login.');
    return;
  }

  // Cria objeto com os dados do usuário
  const usuario = {
    nome,
    email,
    senha,
    plano: null // ainda sem plano
  };

  // Salva no localStorage com o e-mail como chave
  localStorage.setItem(email, JSON.stringify(usuario));

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'login.html';
});
