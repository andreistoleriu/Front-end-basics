// btn = document.getElementById('btn')
// div = document.getElementsByClassName('div');
// setInterval(function showDate() {   
//     var d = new Date();
//     var m = d.getMinutes()
//     var s = d.getSeconds();
//     div.innerHTML = (`${m}:${s}`);
// }, 500);


const o = {
    name: 'Wantsome',
    sayHello: function() {
        console.log('Hello ' + this.name);
    },
}
o.sayHello();
setTimeout(o.sayHello, 500);
o.sayHello.bind(o);

