console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~ First Way ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let string1 = "racecar";
let string2 = "Shivam";
let string3 = "ShivammavihS";

function check_palindrome( str )
{
let lastIndex = str.length -1;
for( let index = 0 ; index < lastIndex/2 ;index++)
{
    let firstChar = str[index] ;//forward character
    let lastChar = str[lastIndex-index];//backward character
    if( firstChar != lastChar)
    {
    return `passed string: "${str}" not a palindrome`;
    }
}
return `passed string: "${str}" is palindrome `;
}
let result = check_palindrome(string1);
console.log(result);

let result2 = check_palindrome(string2);
console.log(result2);

let result3 = check_palindrome(string3);
console.log(result3);



    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Second Way ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
    
    function validatePalin(str) {  
  
        // get the total length of the words  
        const length = string.length;  
      
        // Use for loop to divide the words into 2 half  
        for (let index = 0; index < length / 2; index++) {  
      
            // validate the first and last characters are same  
            if (string[index] !== string[length - 1 - index]) {  
                return( 'It is not a palindrome');  
            }  
        }  
        return( 'It is a palindrome');  
    }  
      
    // accept the string or number from the prompt  
      var string = "ShivammavihS" ; 
      var string = "Shivam";
    const value = validatePalin(string);  
    console.log(`Given String: "${string}" ==> ${value}`);  

