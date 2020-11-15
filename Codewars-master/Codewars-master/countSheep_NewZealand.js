function lostSheep(friday,saturday,total) {
  var sheepReturned=0;
  var sheepEntries=friday.concat(saturday); // you are given 2 arrays, these are joined
  if( sheepEntries.length !== 0 | sheepEntries.length !== NaN ) { // look through the joined array
  for(var i=0; i< sheepEntries.length; i++) {
   if(sheepEntries[i]) {
     sheepReturned+=sheepEntries[i];
   }
  }
  return total - sheepReturned;
  }
}
 
