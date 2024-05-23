// Login

const usuariosValidos = ["aluno", "manu", "dudu", "lucas"];

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
    event.preventDefault(); 
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("senha").value

    if (usuariosValidos.includes(usernameInput) && passwordInput == "123") {
        alert("Login feito com sucesso");
        window.location.href = "areaaluno.html";
    } else {
        alert("Nome de usuário/senha incorreto(os)!");
    }
}

// Adiciona um listener de evento para o envio do formulário
document.getElementById("loginForm").addEventListener("submit", handleFormSubmit);
