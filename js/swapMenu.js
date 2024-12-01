document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('swap');
    const mainContent = document.querySelector('main');
    const mainTitle = document.querySelector('.main-title');
    const ruinsDesigns = document.querySelectorAll('.video-container:not(#bons-designs .video-container)');
    const bonsDesigns = document.getElementById('bons-designs');
    
    
    function updateContent(isBons) {
        if (isBons) {
            mainTitle.innerHTML = '<strong>Exemplos de Design Bom</strong>';
            
            ruinsDesigns.forEach(el => el.style.display = 'none');
            bonsDesigns.style.display = 'block';
        } else {
            mainTitle.innerHTML = '<strong>Exemplos de Design Ruim</strong>';
            
            ruinsDesigns.forEach(el => el.style.display = 'block');
            bonsDesigns.style.display = 'none';
        }
    }
    
    // Checkar estado inicial do checkbox
    updateContent(toggle.checked);
    
    toggle.addEventListener('change', (e) => {
        updateContent(e.target.checked);
    });
});

