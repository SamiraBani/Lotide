const countOnly = function(sentence){
   let result = {};
   for(var letter of sentence){
      if(result[letter]){
         result[letter]+=1;
      }
      else{
         result[letter]=1;
      }
   }
   return result;
}

console.log(countOnly("this is a test"));