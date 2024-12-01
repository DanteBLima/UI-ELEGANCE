document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('#contact-form button[type="submit"]');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function checkRequired(inputArr) {
        let isValid = true;
        inputArr.forEach(function(input) {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} é obrigatório`);
                isValid = false;
            } else {
                showSuccess(input);
            }
        });
        return isValid;
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (checkRequired([nameInput, emailInput, messageInput])) {
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, 'Email inválido');
                return;
            }

            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            
            setTimeout(function() {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Mensagem';
                form.reset();
                alert('Mensagem enviada com sucesso!');
            }, 2000);
        }
    });
});