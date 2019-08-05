var testID = document.getElementById('test');
console.log(testID);

testID.style.fontSize = "100px";

var testClasses = document.getElementsByClassName('test');
console.log(testClasses);

testClasses[0].style.color = "blue";
testClasses[1].style.color = "red";

var sections = document.getElementsByTagName('section');

console.log(sections);

console.log(typeof(sections));

for(var i = 0; i<sections.length; i++) {
    sections[i].style.color = "pink";
    sections[i].style.fontSize = "52px";
}
const box = document.getElementById('box');

box.style.borderRadius = "180px"
box.style.transition = "2s"

console.log(box);

