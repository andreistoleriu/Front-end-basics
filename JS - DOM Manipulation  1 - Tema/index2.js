const books = [
  { title: "The Power of Habit", author: "Charles Duhigg", read: true, },
  {
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    read: false
  }
];

// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietaet pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

var h1 = document.createElement("h1");
var h1Text = document.createTextNode("Book List");
h1.appendChild(h1Text);
document.body.appendChild(h1);

books.forEach(function(el) {
  let title = el.title;
  let author = el.author;
  //console.log(`Titlul cartii este ${title}, iar autorul este ${author}`);
  let p = document.createElement("p");
  let pText = document.createTextNode(
    `Book title: ${title}, Author: ${author}`
  );
  p.appendChild(pText);
  document.body.appendChild(p);
});

var ul = document.createElement("ul");
books.forEach(function(el) {
  let title = el.title;
  let author = el.author;
  let read = el.read;
  let li = document.createElement("li");
  ul.appendChild(li);
  let liText = document.createTextNode(
    `Book title: ${title}, Author: ${author}`
  );
  li.appendChild(liText);
  document.body.appendChild(ul);
  if (read) {
    li.style.color = "green";
  } else {
    li.style.color = "red";
  }
});
