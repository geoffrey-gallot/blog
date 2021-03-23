let meteo = document.getElementById('meteo');
let urlMeteo = 'http://api.openweathermap.org/data/2.5/weather?q=Angouleme,fr&units=metric&lang=fr&appid=8fdfe3c8a43425543990416ac7b27c83';


let result = document.getElementById('result');
let urlAPI = 'https://my-blog-content-manage.herokuapp.com/Posts';

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
 
//recuperation données API open weather
fetch(urlMeteo)
    .then(res => res.json())
    .then(data => {
        meteo.innerHTML = `${data.name}<br>
                               ${data.main.temp}°<br>
                               ${data.weather[0].description}`;
    });

