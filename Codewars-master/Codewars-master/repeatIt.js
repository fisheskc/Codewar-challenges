var repeatIt= function(str, n) {
  if (typeof str === "string") {
    return str.repeat(n);
  } else {
    return 'Not a string';
  }
};
repeatIt("Let us party ", 5);
