function printNumbers(from, to) {
    var i = from;
    function counter () {
        if(i == to) {
        clearInterval();
        } else {console.log('i = ' + i++);}
    };
    setInterval(counter, 1000);
    counter();
}

// printNumbers(1,10);

// Loading spinner on button

var btn = document.getElementById('btn');


function loading() {
    var div = document.createElement('div');
    btn.appendChild(div);
    if(div.classList.contains('line-loader')) {
        div.removeAttribute('class');
    } else if (!div.classList.contains('line-loader')) { 
        div.classList.add('line-loader');
    }

}

SetTimeout(btn.addEventListener('click', loading()),5000);