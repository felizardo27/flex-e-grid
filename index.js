const menuBotao = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu-lateral');
const menuLateralLink = document.querySelectorAll('.menu-lateral__link');

menuBotao.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo');
    
});

menuLateralLink.forEach( elemnto => {
    elemnto.addEventListener('click', (e) => {
        menuLateralLink.forEach( elemento => {
            if (elemento.classList.contains('menu-lateral__link--ativo')) {
                elemento.classList.remove('menu-lateral__link--ativo');
        }});
        e.target.classList.add('menu-lateral__link--ativo'); 
    });
});
