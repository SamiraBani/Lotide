const assertEqual = function(actual, expected) {
   if(actual===expected){
      console.log(`✅Assertion is passed: ${actual} === ${expected}`);
   }
   else{
      console.assert(`🛑Assertion is failed: ${actual} !== ${expected}`);
   }
};


const tail = function(array) {
   return array.slice(1);
 };

 