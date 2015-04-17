function echo() {
  for (var i = 0; i < arguments.length) {
  	console.log(arguments[i]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
