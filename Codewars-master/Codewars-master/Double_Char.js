function doubleChar(str) {
  var myWord = '';
  for (var i = 0; i < str.length; i++){
    myWord += str[i] + str[i];
  }
  return myWord;
}
  console.log(doubleChar('Hello'));
