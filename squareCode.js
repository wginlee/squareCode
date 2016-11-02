function squareIt(str){
  var noSpaces = str.toLowerCase().split(" ").join("").split("");
  var numOfCols = Math.ceil(Math.sqrt(noSpaces.length));

  var squared = [];
  var rowed = [];

  while (noSpaces.length > 0){

    let col = 0;
    while ((col < numOfCols) && (noSpaces.length > 0)){
      rowed.push(noSpaces.shift());
      col += 1;
    }

    squared.push(rowed);
    rowed = [];
  }
  return squared;
}

function squareCode(str){
  var output = "";
  var rowsToRemove = [];
  var square = squareIt(str);
  while (square.length > 0){
    for (var row = 0 ; row < square.length ; row += 1){

      if (square[row][0] !== undefined) output += square[row].shift();
      if (square[row].length === 0 ){
        rowsToRemove.push(row);
        //mark the row for deletion now that it is empty (can't do it now, wi)

     }
    }
    output += " ";

    // "garbage collection"
    rowsToRemove.sort();
    for (var i = rowsToRemove.length - 1; i > 0 ; i -= 1 ){
      square.splice(rowsToRemove[i]);
    }
  }

  return output;
}

var test = "Is this the real life is this just fantasy";

// console.log(squareIt(test));
console.log(squareCode(test));
