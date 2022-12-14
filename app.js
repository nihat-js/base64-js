let str = ''

function convertToBase64(str) {
   let fullBinary = ''
   let newStr = ''
   for (let i = 0; i < str.length; i++) {
      fullBinary += str.charCodeAt(i).toString(2)
   }
   let j = 0
   while (true) {
      if (j + 7 > fullBinary.length) {
         break;
      }
      let newCharacter = String.fromCharCode(parseInt(fullBinary.substring(j, j + 6)).toString(2))
      console.log('new', fullBinary.substring(j, j + 6))
      newStr += newCharacter
      j += 6
   }

   return newStr
}


function convertBinaryToDecimal(str) {
   if (typeof str == number) {
      str = number.toString()
   }

   // for (let i=0;i<i)
}


let result = convertToBase64('   ')
console.log(result)


// 00 10 00 00 00 10 00 00 00 10 00 00
//     I   |   C    |    A    | g