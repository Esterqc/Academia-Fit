document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simulação de login (isso deveria ser feito em um back-end real)
    if(username === "aluno" && password === "1234") {
      window.location.href = "aulas.html"; // Página com as aulas
    } else {
      alert("Usuário ou senha incorretos.");
    }
  });
  