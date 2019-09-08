var login = document.getElementById("login");

function loginFn() {
  var data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
        if(response.error) {
            document.getElementById('error').innerText= response.error;
        } else {
            console.log(window.location);
            window.location.assign('users.html')
        }
    });   
}

login.addEventListener("click", loginFn);

const btn = document.getElementById('btn');

function getData() {
    fetch('https://reqres.in/api/users')
    .then(r=> r.json())
    .then(console.log)
}