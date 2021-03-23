// let urlIMG = 'http://localhost:1337/img-sliders';

// fetch(urlIMG)
//     .then(res => res.json())
//     .then(pics =>
//         pics.forEach(pic => {

//             let imgHref = pic.img[0].url;
//             console.log(imgHref);
//             let imgSlider = document.createElement('img');
//             imgSlider.src = imgHref;
//             slider.append(imgSlider);

//         })
//     );

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
    console.log(count);
}

function slidePrecedente() {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active');
    console.log(count);
}
precedant.addEventListener('click', slidePrecedente);
suivant.addEventListener('click', slideSuivante)