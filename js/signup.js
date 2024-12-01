document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("Confirmpassword");
    const successMessage = document.createElement("p");
    const errorMessage = document.createElement("p");

   //Aqui é so pra dar uma estilazada nas mensagens de erro e sucesso coisa simples
    successMessage.style.cssText = "color: green; font-size: 1.2em; text-align: center; margin-top: 10px;";
    errorMessage.style.cssText = "color: red; font-size: 1.2em; text-align: center; margin-top: 10px;";

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        successMessage.textContent = "";
        errorMessage.textContent = "";

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Verificar se as senhas coincidem
        if (password === confirmPassword) {
            // Salvar o cadastro no localStorage
            const userData = {
                username,
                password
            };

            localStorage.setItem("user", JSON.stringify(userData));

            successMessage.textContent = "Conta criada com sucesso!";
            form.appendChild(successMessage);

            // Redirecionar para a página de login após 2 segundos
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        } else {
            errorMessage.textContent = "As senhas não coincidem. Tente novamente.";
            form.appendChild(errorMessage);
        }
    });
});
