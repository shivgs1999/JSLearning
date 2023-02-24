var str = "    Hey You are Doing Good, keep it up      ";

function stringHandsOn(){

}
stringHandsOn();    
    console.log("---------------------------------- Step 01 ----------------------------------");
    console.log(str);

    console.log("---------------------------------- Step 02 ----------------------------------");
    var strLength = str.length;
    console.log("Length of the Above String is:-",strLength);

    console.log("---------------------------------- Step 03 ----------------------------------");
    var trimResult = str.trim();
    var newLength = trimResult.length; 
    console.log("Before treaming length is:-",str.length);
    console.log( "After treaming length is:-",trimResult.length);
   
    console.log("---------------------------------- Step 04 ----------------------------------");
    var afterTrim = str.length - trimResult.length;
    console.log("total number of Extra Spaces removed in Step 3 are :-",afterTrim);
   
    console.log("---------------------------------- Step 05 ----------------------------------");
    var firstChar = trimResult.charAt(0);
    console.log("First character is -->",firstChar);
    var lastChar = trimResult.charAt(newLength-1);
    console.log("Last character is -->",lastChar);

    console.log("---------------------------------- Step 06 ----------------------------------");
    var splitResult = trimResult.split(" ");
    console.log("Total numbers of words:",splitResult.length);

    console.log("---------------------------------- Step 07 ----------------------------------");

    var goodIndex = str.indexOf("Good");
    console.log("Index of Word 'good' is:",goodIndex);

//var str = "Hey You are Doing Good, keep it up";

    console.log("---------------------------------- Step 08 ----------------------------------");
    var index22= str.slice(22);
    console.log("Substring starting from index22 is:", index22);

    console.log("---------------------------------- Step 09 ----------------------------------");
    var includesUp= trimResult.endsWith("up");
    console.log("String ends with word 'up':",includesUp);

    console.log("---------------------------------- Step 10 ----------------------------------");
    var includesHey= trimResult.startsWith("Hey");
    console.log("String starts with word 'Hey':",includesHey);


