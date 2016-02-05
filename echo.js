function echo(){
  for (var i = 0; i < arguments.length; i++) {
  	console.log(arguments[i]) + "<br>";
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');


