function insertion(tag, id, text) {
    let elem = document.createElement(tag);
    let elemText = document.createTextNode(text);
    elem.setAttribute("id", id);
    elem.appendChild(elemText);
    document.body.appendChild(elem);
  }
  
//   insertion("p", "top", "inserted child text node");
  
  function insertLink(tag, attribute, value) {
    let aTag = document.createElement(tag);
    aTag.setAttribute(attribute, value);
    aTag.innerHTML = value;
    document.body.appendChild(aTag);
  }
  
//   insertLink("a", "href", "http://google.com");
//   insertLink("a", "href", "http://google.com");
//   insertLink("a", "href", "http://google.com");
//   insertLink("a", "href", "http://google.com");
//   insertLink("a", "href", "http://google.com");
  
  function countLinks() {
    //return document.getElementsByTagName("a").length;
    return document.links.length;
  }
  
//    console.log(countLinks());


    var chessBoard = [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
    ];

// for (var i = 0; i<chessBoard.length; i++) {
//     for(var j = 0; j<chessBoard[i].length;j++) { //     console.log(chessBoard[i][j]);
//     }
// }

function createTable() {
    const table = document.createElement('table');
    for(var i = 0; i<chessBoard.length; i++) {
        const row = document.createElement('tr');
        table.appendChild(row);
        for(var j = 0; j<chessBoard[i].length; j++) {
            const column = document.createElement('td');
            column.style.width = "100px";
            column.style.height = "100px";
            if(chessBoard[i][j]) {
                column.style.backgroundColor = "black";
            }
            table.appendChild(column);
        }
    }
    document.body.appendChild(table);
}
createTable();
