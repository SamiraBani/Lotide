
const eqArrays = function(array1,array2) {
   if (array1.length !== array2.length) {
     return false;
   }
   for (let i = 0; i < array1.length; i++) {
     if (array1[i] !== array2[i]) {
       return false;
     }
   }
   return true;
 };

 const assertEqual = function(actual, expected) {
   if(actual===expected){
      console.log(`✅ Assertion is passed: "${actual}" === "${expected}"`);
   }
   else{
      console.log(`🛑 Assertion is failed: "${actual}" !== "${expected}"`);
   }
};

const assertArrayEqual = function(ar1,ar2){
   const comparison = eqArrays(ar1,ar2)

   if(comparison){
      return console.log(`✅ Assertion is passed: "${ar1}" === "${ar2}"`);
   }
   else{
      return console.log(`🛑 Assertion is failed: "${ar1}" !== "${ar2}"`);
   }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);

assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);


 

 const middle = function(input) {
   
   let middleItem = [];
   
   if(input.length % 2 !== 0){
      return middleItem = input[input.length/2];
   }
   else{
      return middleItem = [input[(input.length/2)-1] , input[input.length/2]];
   }
 };

 console.log(middle([1,2,3,4,5]));

 