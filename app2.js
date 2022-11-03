//refactored rgb to hex converter solution

function rgb(r, g, b){
    //return the callback of each value against toHex
    return toHex(r)+toHex(g)+toHex(b);
  }
  
  function toHex(d) {
    //sanitize values greater or lower than 0-255
      if(d < 0 ) {return "00";}
      if(d > 255 ) {return "FF";}
      //data type coerce the output to a string by adding "0" after using the number object to access toString with a radix of 16 that then slices the ouput down to 2
      // characters from the end of the array and then converts them to uppercase
      return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
  }

  console.log(rgb(255,212,118));

  let x = 181;
  let y = x.toString(16).slice(-2).toUpperCase();
  console.log(y);