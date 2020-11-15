function isRubyComing(list) {
  var result = list.some(function(obj) {
     if(obj.language === 'Ruby') {
       return true;
     } else {
       false;
     }
    });
 return result;
}
