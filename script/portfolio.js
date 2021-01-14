// Slider portfolio

const sliderPortfolio = document.querySelector('.slider-portfolio'); //cette constante pour faire apparaître en entier le slider
const srcEnCoursSlider = document.querySelector('.img-visible-slider'); //c'est l'image que l'on est en trai de regarder
const allPicsPortfolio = Array.from(document.querySelectorAll('.grid-item img')); // toutes les images du portfolio
const rightPortfolio = document.querySelector('.btn-right');
const leftPortfolio = document.querySelector('.btn-left');
const fermerSlide = document.querySelector('.btn-fermer-slider');

let photoEnCours; //let: valeur qui vont être réassignées. photoEnCours ce sera la photo que l'on sera en train de regarder
let indexEnCours; //indexEnCours ce sera l'index de cette photo par rapport à Array.fromArray.from(document.querySelectorAll('.grid-item img')

//Pour que le slider apparaisse avec l'image surlaquelle on vient de cliquer et un affichage en grand
allPicsPortfolio.forEach(item => {
    item.addEventListener('click', (e) => { // dès que je clique, on est à l'écoute d'un évènement

        sliderPortfolio.style.display = "block"; //apparition du slider
        srcEnCoursSlider.src = e.target.src; //c'est l'image sur laquelle on vient de cliquer.src ==> l'image que l'on est en train de regarder, sa source est égale à l'image sur laquelle on vient de cliquer. 
        photoEnCours = e.target; 
        indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
        console.log(indexEnCours);
    })
})

rightPortfolio.addEventListener('click', () => {

    if(indexEnCours === 11) { //A partir de l'index 11 on fait un reset avec indexEnCours = 0; c'es pourquoi je fais cette condition
        indexEnCours = 0;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }

    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours + 1].src; //On se déplace
    photoEnCours = allPicsPortfolio[indexEnCours + 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})


leftPortfolio.addEventListener('click', () => {

    if(indexEnCours === 0) {
        indexEnCours = 11;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }

    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours - 1].src;
    photoEnCours = allPicsPortfolio[indexEnCours - 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})

fermerSlide.addEventListener('click',() => {
    sliderPortfolio.style.display = "none";
})