//converts rgb color values to hex color values


function rgb(r, g, b){
//define a reference index for hex numbers
    let hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//declaring output container in its initial data type
    let output = [];
//making a copy of the input values to mutate without altering the actual inputs
    let rgbArr = [r,g,b];
//sanitizing inputs so that all non-number values just return "00" for that part of the hex code
    if (r < 0 || typeof r != "number"){
        rgbArr[0] = 0;
    } else if (r > 255){
        rgbArr[0] = 255;
    };
    if (g < 0 || typeof g != "number"){
        rgbArr[1] = 0;
    }else if (g > 255){
        rgbArr[1] = 255;
    };
    if (b < 0 || typeof b != "number"){
        rgbArr[2] = 0;
    }else if (b > 255){
        rgbArr[2] = 255;
    };
//looping through r, g, b to determine their values and push them to output array
    for (let rgbCode of rgbArr){
      let hexTemp = (rgbCode/16);
      let firstNum = Number(hexTemp.toString().split(".")[0]);
      let secondHex;
//handling inefficiency where my math can't address rgbCode being equal to 0 for secondHex variable
      if (rgbCode <= 0 || rgbCode == undefined){
        secondHex = 0;
      }else {

      secondHex = Math.round(((rgbCode/16) - firstNum) * 16);
    }
      let firstCode = firstNum;
      let secondCode = Number(secondHex.toString().split(".")[0]);
       for (let i = 0; i <= hexArr.length; i++){
        if(i == firstCode){
          output.push(hexArr[i]);
        }
      }
      for (let i = 0; i <= hexArr.length; i++){
        if(i == secondCode){
          output.push(hexArr[i]);
        }
      }
    }
    return console.log(output.join(""));
  };