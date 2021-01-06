const assertEqual = function(actual, expected) {
   if(actual===expected){
      console.log(`✅Assertion is passed: "${actual}" === "${expected}"`);
   }
   else{
      console.assert(`🛑Assertion is failed: "${actual}" !== "${expected}"`);
   }
};


// const assertEqual = function(actual, expected) {
//    const inputOne = actual;
//    const inputTwo = expected;
//    let result = "";
//    if (inputOne === inputTwo) {
//      result += `✅Assertion Passed: ${inputOne} === ${inputTwo}`;
//    } else {
//      result += `🔴Assertion Failed: ${inputOne} !== ${inputTwo}`;
//    }
//    return result;
//  };
 




// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
