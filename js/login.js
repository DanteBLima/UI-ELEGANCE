document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.createElement("p");

    errorMessage.style.cssText = "color: red; font-size: 1.2em; text-align: center; margin-top: 10px;";

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        
        errorMessage.textContent = "";

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
           
            if (username === storedUser.username && password === storedUser.password) {
                localStorage.setItem('isLoggedIn', 'true');
                window.alert("Login efetuado com sucesso!");
                window.location.href = "index.html";
            } else if (username === storedUser.username) {
                errorMessage.textContent = "Senha incorreta. Tente novamente.";
                form.appendChild(errorMessage);
            } else {
                errorMessage.textContent = "Usuário não encontrado. Verifique suas credenciais.";
                form.appendChild(errorMessage);
            }
        } else {
            errorMessage.textContent = "Nenhum usuário cadastrado. Por favor, registre-se primeiro.";
            form.appendChild(errorMessage);
        }
    });
});
