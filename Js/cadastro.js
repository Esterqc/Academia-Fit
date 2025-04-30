function cadastrar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  const plano = document.getElementById('plano').value;
  const horario = document.getElementById('horario').value;
  const professor = document.getElementById('professor').value;
  const aulaSemana = document.getElementById('aulaSemana').value;

  if (!nome || !email || !senha || !confirmarSenha || !plano || !horario || !professor || !aulaSemana) {
    alert('Preencha todos os campos!');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  const usuario = { nome, email, senha, plano, horario, professor, aulaSemana };
  localStorage.setItem('usuario', JSON.stringify(usuario));

  alert('Cadastro realizado com sucesso!');
  window.location.href = 'login.html';
}
