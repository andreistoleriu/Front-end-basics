let initialSize = 12;
const b = document.querySelector('span');
console.log(b);
b.style.fontSize=`${initialSize}px`; 

document.addEventListener('keydown', e => {
    if(e.key ==='ArrowUp') {
        console.log('umfla-ma');
    } else if (e.key === 'ArrowDown') {
        console.log('dezumfla-ma');
    }
});


function inflateBallon() {
    
}

