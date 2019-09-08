var serverURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"

function getData() {
    const request = new XMLHttpRequest();


    request.onreadystatechange = function () {
        if(this.status===200 && this.readyState ===4) {
            document.getElementById('quote').innerHTML = JSON.parse(this.responseText)[0];
        }
        if(this.readyState === 1) {
            console.log(this);
            document.getElementById('quote').innerHTML  = "Loading..."
        }
    };
    request.open('GET', serverURL);
    request.send()
}

var btn = document.getElementById('btn');

btn.addEventListener('click', getData);






