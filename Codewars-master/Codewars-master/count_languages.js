function countLanguages(list) {

obj = {};
   my_func = function(item){
       key = item.language;
       if ( key in obj) {
       obj[key]++;
//       ret     HINT: If key exists we need to add one to the current value.
         
       } else {
//            HINT: If key doesn't exist, it needs to be added to the object with a count of 1.
         obj[key]=1;
       }
   }
 
  list.forEach( my_func);
  return obj;
}
