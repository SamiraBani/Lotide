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

const assertArrayEqual = function(ar1,ar2){
   const comparison = eqArrays(ar1,ar2)

   if(comparison){
      return console.log(`✅ Assertion is passed: "${ar1}" === "${ar2}"`);
   }
   else{
      return console.log(`🛑 Assertion is failed: "${ar1}" !== "${ar2}"`);
   }
};



const letterPositions = function(sentence) {
   const results = {};
   for(let i=0;i<sentence.length;i++){
      let character = sentence[i];
      if(results[character]){
         results[character].push(i);
      }
      else{
         results[character]=[i];
      }
   }
   return results;
 };

 console.log(letterPositions('hello'));

 assertArrayEqual(letterPositions("hello").e, [1]);