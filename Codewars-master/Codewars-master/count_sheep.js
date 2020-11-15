var sheep = [3,4,2,5,2,1];

function countSheeps(arrayOfSheep) {
  var sheep=0;
  if( arrayOfSheep.length !== 0 ) {
   for(var i=0; i < arrayOfSheep.length; i++) {    
  if ( arrayOfSheep[i] ) {
sheep += arrayOfSheep[i];
}
 }
return sheep; 
 }
}
console.log(countSheeps(sheep));
