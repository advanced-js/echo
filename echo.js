function echo(){
  var argLen = arguments.length;
  for (var i = 0; i < argLen; i++) {
    console.log(arguments[i]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
