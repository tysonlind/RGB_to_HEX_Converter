//converts rgb color values to hex color values
function rgb(r, g, b){
    let hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let rgbArr = [r,g,b];
    let output = [];
    
  
    for (let rgbCode of rgbArr){
      let hexTemp = (rgbCode/16);
      secondHex = Math.round(((hexTemp.toString().split(".")[1].slice(0,2))/100) * 16);
      let firstCode = Number(hexTemp.toString().split(".")[0]);
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
  }
    
  
  rgb(215,12,85);
  rgb(25,122,115);
  rgb(215,12,217);
  rgb(0,249,255);
  