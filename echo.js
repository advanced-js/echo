function echo(){
  for (var i = 0, ilen = arguments.length; i < ilen; i++) {
  	console.log(arguments[i]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');