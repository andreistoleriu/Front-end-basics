// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra


const body = document.getElementById('body');
console.log(body);

body.style.fontFamily = "Arial,sans-serif";

const name = document.getElementById('name');
name.innerHTML = "Andrei";

const favDrink = document.getElementById('fav-drink');
favDrink.innerHTML = "Apa plata";

const bornPlace = document.getElementById('born-place');
bornPlace.innerHTML = "Piatra-Neamt";

const listItems = document.getElementsByTagName('li');
// console.log(listItems);

for(var i=0; i<listItems.length;i++) {
    listItems[i].classList.add('listitem');
    listItems[i].style.color = "red";
}
// console.log(listItems[0]);

var image = document.createElement('img');
image.setAttribute('src', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80');
image.setAttribute('width', '320px');
document.body.appendChild(image);



