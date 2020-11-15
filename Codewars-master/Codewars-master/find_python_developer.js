function getFirstPython(list) {
  list = list.filter((item) => item.language==='Python');
  if(list.length===0) {
    return ('There will be no Python developers');
  } else{
  return (list[0].firstName + ', ' + list[0].country);
 }
}
