

function getPerct() {
    var heroText = document.querySelector('.creative');
    var planet = document.querySelector('.planet');
    var computer = document.querySelector('#contact');
    // Get percent scrolled
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var scrolled =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100; //0 to 100
    var scrollInv = scrolled / 100 + 1;
    var scrollInv2 = (100 - scrolled) / 100;

    var computerScale = (0.05 * scrolled + 1) / 10;
    if (planet) {
        planet.style.transform = `scale(${scrollInv}, ${scrollInv}) translateX(${scrolled *
            4}px)`;
    }
    if (heroText) {
        heroText.style.transform = `scale(${scrollInv2}, ${scrollInv2})`;
    }
    // if (computer) {computer.style.transform = `scale(${computerScale})`;}
    // console.log(scrollInv, planet.style.transform);

    
}
getPerct();

document.addEventListener('scroll', fadeHero);
function fadeHero() {
    
    getPerct();
    
}
