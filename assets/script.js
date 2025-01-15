const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let bannerImg = document.querySelector(".banner-img");

//gestion des points
let dots = document.querySelector(".dots");

let dot = ` 
<p class = dot></p>
`;

let dotList = [];
for (let i = 0; i < slides.length; i++) {
  dots.innerHTML += dot;
}

let myDot = document.querySelectorAll(".dot");
console.log(dotList);
console.log(myDot);

let tagName = document.getElementById("tag_name");

//gestion des flèches

j = 0;
myDot[0].classList.add("dot_selected");

let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  if (j == slides.length - 1) {
    myDot[0].classList.add("dot_selected");
    bannerImg.src = "./assets/images/slideshow/" + slides[0].image;
    tagName.innerHTML = slides[0].tagLine;
    myDot[j].classList.remove("dot_selected");
    j = 0;
  } else {
    myDot[j].classList.remove("dot_selected");
    j++;
    myDot[j].classList.add("dot_selected");
    bannerImg.src = "./assets/images/slideshow/" + slides[j].image;
    tagName.innerHTML = slides[j].tagLine;
  }
});

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  if (j == 0) {
    myDot[slides.length - 1].classList.add("dot_selected");
    bannerImg.src =
      "./assets/images/slideshow/" + slides[slides.length - 1].image;
    tagName.innerHTML = slides[slides.length - 1].tagLine;
    myDot[j].classList.remove("dot_selected");
    j = slides.length - 1;
  } else {
    myDot[j].classList.remove("dot_selected");
    j--;
    myDot[j].classList.add("dot_selected");
    bannerImg.src = "./assets/images/slideshow/" + slides[j].image;
    tagName.innerHTML = slides[j].tagLine;
  }
});
