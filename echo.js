function echo() {
  for (var i = 0, j = arguments.length; i < j; i++){
    console.log(arguments[i]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
