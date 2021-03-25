let meteo = document.getElementById("meteo");
let urlMeteo =
  "http://api.openweathermap.org/data/2.5/weather?q=Angouleme,fr&units=metric&lang=fr&appid=8fdfe3c8a43425543990416ac7b27c83";

let result = document.getElementById("result");
let urlAPI = "https://my-blog-content-manage.herokuapp.com/Posts";

let affichePresentation = document.getElementById("affichePresentation");
let urlPres = "https://my-blog-content-manage.herokuapp.com/Presentations";

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
      result.prepend(li);
      li.innerText = retourPost;
    })
  );

//recuperation données API open weather
fetch(urlMeteo)
  .then((res) => res.json())
  .then((data) => {
    meteo.innerHTML = `${data.name}<br>
                               ${data.main.temp}°<br>
                               ${data.weather[0].description}`;
  });

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
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 50,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

var img1 = document.getElementById('carousel01');
var img2 = document.getElementById('carousel02');
var img3 = document.getElementById('carousel03');
var img4 = document.getElementById('carousel04');