function echo(){
  // ...
  for (var index = 0; index < arguments.length; index++)
  	console.log(arguments[index]);
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
