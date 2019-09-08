const btn = document.getElementById('btn');

function getData() {
    fetch('https://reqres.in/api/users')
    .then(r=> r.json())
    .then(console.log)
}


