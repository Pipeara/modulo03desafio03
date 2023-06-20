//*funcion oriogibal *//
//function pintar(){
//    ele = document.getElementById("ele1")
  //  ele.style.backgroundColor = 'yellow'
//  }
  //ele = document.getElementById("ele1") ele.addEventListener("click", pintar);
 // Modifica la función para que reciba el elemento clickeado 
 // de forma de no tener que seleccionarlo nuevamente dentro de la función
 /*
btn = document.querySelector("button")

// usando funcion anonima en AEL pero con funcion flecha y llamado a function pintar con parametros
btn.addEventListener("click",  () => {
    pintar("black");
}) 
const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";
const color = "yellow";

const pintar = () => {
    ele.style.backgroundColor = color;
};

ele.addEventListener("click", pintar);*/
const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

const pintar = (color = "green") => { // pasarle un color como argumento a la función pintar.
  ele.style.backgroundColor = color;
};

ele.addEventListener("click", () => {
  pintar("yellow");
});






