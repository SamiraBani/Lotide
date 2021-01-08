const assertArraysEqual = function(ar1,ar2){
   const comparison = eqArrays(ar1,ar2)

   if(comparison){
      return console.log(`✅ Assertion is passed: "${ar1}" === "${ar2}"`);
   }
   else{
      return console.log(`🛑 Assertion is failed: "${ar1}" !== "${ar2}"`);
   }
};



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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
   const results = [];
   for (let item of array) {
     results.push(callback(item));
   }
   return results;
 }

 const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);