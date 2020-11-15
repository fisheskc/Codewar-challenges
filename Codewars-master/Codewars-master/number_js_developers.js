function countDevelopers(list) {
   var result = list.filter(function(obj) {
   return obj.continent==='Europe' && obj.language === 'JavaScript';
  });
   return result.reduce(function(obj) {
    return obj +1;
  }, 0);
  
}
