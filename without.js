
// const eqArrays = function(array1,array2) {
//    if (array1.length !== array2.length) {
//      return false;
//    }
//    for (let i = 0; i < array1.length; i++) {
//      if (array1[i] !== array2[i]) {
//        return false;
//      }
//    }
//    return true;
//  };


// const assertArrayEqual = function(ar1,ar2){
//    const comparison = eqArrays(ar1,ar2)

//    if(comparison){
//       return console.log(`✅ Assertion is passed: "${ar1}" === "${ar2}"`);
//    }
//    else{
//       return console.log(`🛑 Assertion is failed: "${ar1}" !== "${ar2}"`);
//    }
// };

// assertArrayEqual([1, 2, 3], [1, 2, 3]);

// assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);

const without = function(array,itemsToRemove){
   let myArray = array;
   for(let i=0; i<myArray.length; i++){
   itemsToRemove.forEach(element => { 
      if(element===myArray[i]){
         let removeIndex = myArray.indexOf(element);
         myArray.splice(removeIndex,1);
      }
   })
   }
   return myArray;
}
console.log(without([1,2,3,4,5],[3,4]));
