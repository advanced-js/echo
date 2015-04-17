function echo() {
  for (var i = 0; i < arguments.length) {
  	console.log(arguments + '\n');
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');


