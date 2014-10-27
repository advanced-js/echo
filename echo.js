function echo(){
  var args = arguments.length;
  for (var i=0; i < args; i++){
    console.log(arguments[i]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
