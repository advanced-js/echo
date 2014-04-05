function echo(){
  //arguments.forEach(function(elem) {
  //  console.log(elem);
  //});
  // ...
  for (elem in arguments) {
    console.log(arguments[elem]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
