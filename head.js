const assertEqual = function(actual, expected) {
   if(actual===expected){
      console.log(`✅Assertion is passed: ${actual} === ${expected}`);
   }
   else{
      console.assert(`🛑Assertion is failed: ${actual} !== ${expected}`);
   }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(array) {
   return array[0];
 };
 
 assertEqual(head([5,6,7]), 5);