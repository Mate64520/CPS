// Petite animation simple : léger "glitch" au survol du trader

const trader = document.querySelector('.trader');
const islander = document.querySelector('.islander');

function addGlitch(el) {
    el.style.transform = 'translateX(2px)';
    setTimeout(() => {
        el.style.transform = 'translateX(-2px)';
    }, 80);
    setTimeout(() => {
        el.style.transform = 'translateX(0)';
    }, 160);
}

if (trader) {
    trader.addEventListener('mouseenter', () => addGlitch(trader));
}

if (islander) {
    islander.addEventListener('mouseenter', () => addGlitch(islander));
}
