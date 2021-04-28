document.addEventListener('DOMContentLoaded', function () {
    let weddingTabsContainer = document.querySelector('#wedding-tabs'),
        body = document.querySelector('body'),
        typeWeddingSliders = document.querySelectorAll('.swiper-container'),
        weddingTypeSpoiler = document.querySelector('#wedding-type'),
        burger = document.querySelector('#header-burger'),
        mainMenu = document.querySelector('#slogan-menu'),
        menuClose = document.querySelector("#menu_close");
    if(weddingTypeSpoiler != null){
        weddingTypeSpoiler.addEventListener('click', showMenu);
        document.querySelectorAll('.wedding-tabs__link').forEach((item)=>{
           if(item.classList.contains('active')){
               weddingTypeSpoiler.textContent = item.textContent;
           }
        });

    }
    if (typeWeddingSliders != null) {
        typeWeddingSliders.forEach((item) => {
            if (!item.classList.contains('active')) {
                item.classList.add('hidden');
            }
        });
    }
    if (weddingTabsContainer != null) {
        weddingTabsContainer.addEventListener('click', (event) => {
            event.stopImmediatePropagation();
            event.preventDefault();
            let links = Array.from(weddingTabsContainer.children);
            links.forEach((element) => {
                element.classList.remove('active');
            });
            event.target.classList.add('active');
            showWedding(event.target);
            if(window.screen.width <= 768){
                weddingTabsContainer.classList.toggle('active');
            }
        });
    }
    if(burger != null){
        burger.addEventListener('click', showAndHideMainMenu);
    }
    if(menuClose != null){
        menuClose.addEventListener('click', showAndHideMainMenu)
    }

    function showWedding(link) {
        weddingTypeSpoiler.textContent = link.textContent;
            let linkHref = link.getAttribute('href');
        if (typeWeddingSliders != null) {
            typeWeddingSliders.forEach((item) => {
                item.classList.remove('active');
                item.classList.add('hidden');
                if ("#" + item.id === linkHref) {
                    if (!item.classList.contains('active')) {
                        item.classList.add('active');
                        item.classList.remove('hidden');
                    }
                }
            });
        }

    }
    function showMenu() {
        weddingTypeSpoiler.classList.toggle('active');
        if(weddingTabsContainer != null){
            weddingTabsContainer.classList.toggle('active');

        }
    }
    function showAndHideMainMenu() {
       mainMenu.classList.toggle('active');
       body.classList.toggle('lock');
    }

});
