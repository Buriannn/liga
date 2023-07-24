let buyBtns = document.querySelectorAll('.buy-btn');
let popUp = document.querySelector('.pop-up');
let popContent = document.querySelectorAll('.pop-up__content');
let closePop = document.querySelector('.pop-up__close-icon');
let body = document.querySelector('body');

for (i = 0; i < buyBtns.length; i++) {
    buyBtns[i].addEventListener('click', function () {
        let btnData = this.getAttribute('data-buy');
        popUp.classList.add('pop-up--active')

        for (e = 0; e < popContent.length; e++) {
            if(btnData == e) {
                popContent[e].classList.add('pop-up__content--active')
                body.classList.add('overflowHidden')
            }
        }

    })

}


closePop.addEventListener('click', function () {
    popUp.classList.remove('pop-up--active');
    let activePop = document.querySelector('.pop-up__content--active');
    activePop.classList.remove('pop-up__content--active');
    body.classList.remove('overflowHidden')
});

popUp.addEventListener('click', function (event) {
    if(event.target.classList.contains('pop-up')) {
        popUp.classList.remove('pop-up--active');
        let activePop = document.querySelector('.pop-up__content--active');
        activePop.classList.remove('pop-up__content--active');
    }
});





//PARALLAX

//Получаем все элменты для анимации
let animItem = document.querySelectorAll('.decor-parallax');

let animItemTwo = document.querySelectorAll('.decor-parallax--two')

function parallax(event) {
    for (i = 0; i < animItem.length; i++) {
        animItem[i].style.transform = `translateX(${event.clientX / 50}px)`;
    }
    for (e = 0; e < animItemTwo.length; e++) {
        animItemTwo[e].style.transform = `translateX(${event.clientX / 100}px)`;
    }
}


document.addEventListener('mousemove', parallax)
