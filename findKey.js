const assertEqual = function(actual, expected) {
   if(actual===expected){
      console.log(`✅  Assertion is passed: "${actual}" === "${expected}"`);
   }
   else{
      console.log(`🛑  Assertion is failed: "${actual}" !== "${expected}"`);
   }
};


const findKey = function(obj, callback) {
   for (let item in obj) {
     if (callback(obj[item])) {
       return item;
     }
   }
 };



console.log(assertEqual(findKey({
   "Blue Hill": { stars: 1 },
   "Akaleri":   { stars: 3 },
   "noma":      { stars: 2 },
   "elBulli":   { stars: 3 },
   "Ora":       { stars: 2 },
   "Akelarre":  { stars: 3 }
 }, x => x.stars === 2),"noma"));

 console.log(assertEqual(findKey({
   "Blue Hill": { stars: 1 },
   "Akaleri":   { stars: 3 },
   "noma":      { stars: 2 },
   "elBulli":   { stars: 3 },
   "Ora":       { stars: 2 },
   "Akelarre":  { stars: 3 }
 }, x => x.stars === 3),"Akaleri"));