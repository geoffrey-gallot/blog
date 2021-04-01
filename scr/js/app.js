let meteo = document.getElementById("meteo");
let urlMeteo =
  "http://api.openweathermap.org/data/2.5/weather?q=Angouleme,fr&units=metric&lang=fr&appid=8fdfe3c8a43425543990416ac7b27c83";

let result = document.getElementById("result");
let urlAPI = "https://my-blog-content-manage.herokuapp.com/Posts";

let affichePresentation = document.getElementById("affichePresentation");
let urlPres = "https://my-blog-content-manage.herokuapp.com/Presentations";

//recuperation de la dic carousel avec jQuery
let owl = $(".owl-carousel");

let chargement = document.querySelector('.chargement-icone');

let footer = document.getElementById('footer');
// let colorLinks = document.getElementById('liens');

//Recuperation données API des post strapi
fetch(urlAPI)
  // renvoi un type json
  .then((res) => res.json())
  //renvoi les données de l API pour l affichage
  .then((datas) =>
    datas.forEach((data) => {
      let dateSplit = data.published_at.split("T")[0];
      let retourPost = `${data.Title}
                              ${dateSplit}
                              ${data.Description}`;
      let li = document.createElement("li");
      li.className = "post";
      result.prepend(li);
      li.innerText = retourPost;
      let nbPost = document.querySelectorAll(".post").length;
      console.log(nbPost);
      if (nbPost % 2 === 0) {
        footer.setAttribute('style', 'background: #1d3c45');
      }else{
        footer.setAttribute('style', 'background: #d2601a'); 
      }
    })
    chargement.classList.add('disparition');
  );

//recuperation données API open weather
fetch(urlMeteo)
  .then((res) => res.json())
  .then((data) => {
    meteo.innerHTML = `${data.name}<br>
                       ${data.main.temp}°<br>
                       ${data.weather[0].description}`;
  })
  .catch((err) => console.log(`${err}`));

//Recuperation données API de presentation strapi
fetch(urlPres)
  .then((res) => res.json())
  .then((datas) =>
    datas.forEach((data) => {
      let dataPres = data.Presentation;
      affichePresentation.innerHTML = dataPres;
    })
  );

//configuration owl carousel

owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 50,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [2000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

var img1 = document.getElementById("carousel01");
var img2 = document.getElementById("carousel02");
var img3 = document.getElementById("carousel03");
var img4 = document.getElementById("carousel04");
