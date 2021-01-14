const itemsSlide = document.querySelectorAll('.container-slides img'); //on a pris toutes les images dans container-slides pour les a mis dans la constante. querySelectorAll retourne un tableau, une collection d'éléments.
const nbSlide = itemsSlide.length; //le nombre d'images qui est à l'intérieur
const suivant = document.querySelector('.right'); //les boutons droit gauche
const precedent = document.querySelector('.left');
let count = 0; //on démarre à zéro soit notre image de départ


suivant.addEventListener('click', slideSuivante); //lorsque l'on va cliquer sur les chevron, on va activer une fonction.

function slideSuivante(){
    itemsSlide[count].classList.remove('active'); //lorsque je clique sur suivant, je prends l'image actuelle, et lui enlève la classe active

    if(count < nbSlide - 1) { // si count (qui est de zéro) est inférieur à nbre de slide - 1 (c'est 3 car on a 3 images) donc 3-1=2  ==>0<2
        count++;
    } else {
        count = 0;
    }

    itemsSlide[count].classList.add('active');

}

precedent.addEventListener('click', slidePrecedente)

function slidePrecedente(){
    itemsSlide[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    itemsSlide[count].classList.add('active');

}