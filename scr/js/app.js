let meteo = document.getElementById('meteo');
let urlMeteo = 'http://api.openweathermap.org/data/2.5/weather?q=Angouleme,fr&units=metric&lang=fr&appid=8fdfe3c8a43425543990416ac7b27c83';

let urlIMG = 'http://localhost:1337/img-sliders';
let slider = document.getElementById('slider');

let result = document.getElementById('result');
let urlAPI = 'http://localhost:1337/posts';

fetch(urlAPI)
    // renvoi un type json
    .then(res => res.json())
    //renvoi les données de l API pour l affichage
    .then(datas =>
        datas.forEach(data => {
            let dateSplit = (data.published_at.split('T'))[0];
            let retourPost = `${data.Title}
                              ${dateSplit}
                              ${data.Description}`;
            let li = document.createElement('li');
            result.prepend(li);
            li.innerText = retourPost;
        }
    ));

fetch(urlMeteo)
    .then(res => res.json())
    .then(data => {
        meteo.innerHTML = `${data.name}<br>
                               ${data.main.temp}°<br>
                               ${data.weather[0].description}`;
    });

fetch(urlIMG)
    .then(res => res.json())
    .then(pics =>
        
        pics.forEach(pic => {
            let imgHref = pic.img[0].url;
            console.log(imgHref);
            let imgSlider = document.createElement('img');
            imgSlider.src = imgHref;
            slider.append(imgSlider);
        })
    );