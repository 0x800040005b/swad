document.addEventListener('DOMContentLoaded', function () {
    let settings = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        noSwiping: true,
        simulateTouch: false,
        loop: true,
    }
    /* Sliders */

    const sloganSlider = new Swiper('.swiper-container.slogan-container',{
        pagination:{
            el: '.swiper-pagination',
            type: 'bullets',
            renderBullet: function(index,className){
                return `<div class="${className}"><div></div></div>`;
            }
        },
    });



    let weddingTabsContainer = document.querySelector('#wedding-tabs'),
        body = document.querySelector('body'),
        typeWeddingSliders = document.querySelectorAll('.wedding-container'),
        weddingTypeSpoiler = document.querySelector('#wedding-type'),
        burger = document.querySelector('#header-burger'),
        mainMenuContainer = document.querySelector('#slogan-menu'),
        menuClose = document.querySelector("#menu_close");
        // mainMenuLinks = document.querySelectorAll('.slogan-menu__link');

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
       mainMenuContainer.classList.toggle('active');
       body.classList.toggle('lock');
    }

    let weddingSlider = new Swiper('.wedding-container',settings);






});
