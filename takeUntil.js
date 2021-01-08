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

const takeUntil = function(array, callback) {
   let result = [];
   for(item of array){
      let callBackResult = callback(item);
      if(!callBackResult){
         result.push(item);
      }
      else{
         break;
      }
   }
   return result;
 }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

console.log('----------------');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

