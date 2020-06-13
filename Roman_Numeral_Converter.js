function convertToRoman(num) {
    //if num equal 0, return nulla
    if (num === 0){return nulla;}
    //
    
    let ones = {1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'};
    let tens = {1:'X',2:'XX',3:'XXX',4:'XL',5:'L',6:'LX',7:'LXX',8:'LXXX',9:'XC'};
    let hundreds = {1:'C',2:'CC',3:'CCC',4:'CD',5:'D',6:'DC',7:'DCC',8:'DCCC',9:'CM'};
    //three required object created

    //make the number string
    let numstr = String(num);
    //

    //get the ones to hundreds string
    let regex = /\d{1,3}$/; //regex to extract ones to hundreds
    let firststr = numstr.match(regex)[0]; //extract done
    //

    //get the rest digits string if any
    if (numstr.length >= 4) { //if any
        let secondstr = numstr.substring(0,numstr.length - 3) //extract 2nd string done
    }
    //
   }
   
   convertToRoman(36);
   