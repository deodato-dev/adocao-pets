const formulario = document.getElementById("meuForm");

function mostrarErro(input, spanErro, mensagem) {
  spanErro.textContent = mensagem;
}

function limparErros() {
  const spans = document.querySelectorAll("form span");
  const inputs = document.querySelectorAll("form input, form select");

  spans.forEach(span => span.textContent = "");
  inputs.forEach(input => input.style.borderColor = "");
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  limparErros(); 
  
  let formularioValido = true;

  
  const nome = document.getElementById("nome");
  const telefone = document.getElementById("telefone");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const confirmarSenha = document.getElementById("confirmarsenha");
 const erroNome = document.getElementById("erroNome");
 
  const erroTelefone = document.getElementById("erroTelefone") || document.getElementById("erroTelfone");
  const erroEmail = document.getElementById("erroEmail");
  const erroSenha = document.getElementById("erroSenha");
  const erroConfirmarSenha = document.getElementById("erroConfirmarsenha");

  
  if (nome.value.trim().length < 3) {
    mostrarErro(nome, erroNome, "Digite um nome com pelo menos 3 caracteres.");
    formularioValido = false;
  }

  const apenasNumeros = telefone.value.replace(/\D/g, "");
  if (apenasNumeros.length < 10) {
    mostrarErro(telefone, erroTelefone, "Digite um telefone válido com DDD.");
    formularioValido = false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value.trim())) {
    mostrarErro(email, erroEmail, "Digite um e-mail válido (ex: carol456@gmail.com).");
    formularioValido = false;
  }

 
  if (senha.value.length < 6) {
    mostrarErro(senha, erroSenha, "A senha deve ter no mínimo 6 caracteres.");
    formularioValido = false;
  }

  if (confirmarSenha.value !== senha.value || confirmarSenha.value === "") {
    mostrarErro(confirmarSenha, erroConfirmarSenha, "As senhas não coincidem.");
    formularioValido = false;
  }

  if (formularioValido) {
    alert("Cadastro realizado com sucesso!");
    
  }
});