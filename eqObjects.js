const assertEqual = function(actual, expected) {
   if(actual===expected){
      console.assert(`✅  Assertion is passed: "${actual}" === "${expected}"`);
   }
   else{
      console.assert(`🛑  Assertion is failed: "${actual}" !== "${expected}"`);
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


const eqObjects = function(object1, object2) {
   let obj1 = Object.keys(object1).length;
   let obj2 = Object.keys(object2).length;
   if(obj1 !== obj2){
      return false;
   }
   for(let key of Object.keys(object1)){
      if(Array.isArray(object1[key] && Array.isArray(object2[key]))){
         if (!eqArrays(object1[key], object2[key])) {
            return false;
      }
      else if (object1[key] !== object2[key]) {
         return false;
       }
      }
   }
   return true;
};


const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), true); // => false
