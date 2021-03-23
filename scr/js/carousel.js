var items = document.querySelectorAll('img');
var nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedant = document.querySelector('.left');
let count = 0;

function slideSuivante() {
    items[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    //console.log(count);
}
function slidePrecedente() {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active');
    //console.log(count);
}
precedant.addEventListener('click', slidePrecedente);
suivant.addEventListener('click', slideSuivante)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)