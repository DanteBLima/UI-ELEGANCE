document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.querySelector('.nav-right ul li:first-child a');
    
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            loginLink.textContent = 'Account';
            loginLink.href = '#'; 
            loginLink.addEventListener('click', logout);
        } else {
            loginLink.textContent = 'Login/Sign Up';
            loginLink.href = 'login.html';
            loginLink.removeEventListener('click', logout);
        }
    }

    function logout(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        checkLoginStatus();
        alert('Você foi desconectado.');
        window.location.href = 'index.html'; 
    }

    checkLoginStatus();
});