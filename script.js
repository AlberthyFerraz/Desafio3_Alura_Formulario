document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formInscricao");
    const mensagem = document.getElementById("mensagem-usuario");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const idUsuario = document.getElementById("idUsuario").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const nome = document.getElementById("nome").value.trim();
      const aceite = document.getElementById("aceite").checked;
  
      if (!idUsuario || !senha || !nome || !aceite) {
        alert("Por favor, preencha CPF, senha, nome e aceite os termos.");
        return;
      }
  
      // Salva os dados no localStorage
      const dadosUsuario = {
        idUsuario,
        senha,
        nome
      };
  
      localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
  
      // Exibe os dados salvos na tela
      mensagem.style.display = "block";
      mensagem.innerHTML = `
        <strong>Dados salvos com sucesso!</strong><br>
        <label><strong>CPF/ID:</strong> ${idUsuario}</label><br>
        <label><strong>Nome:</strong> ${nome}</label><br>
        <label><strong>Senha:</strong> ${senha}</label>
    `;
  
      form.reset();
    });
  });
  