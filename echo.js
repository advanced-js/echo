function echo(){
  for (var i = 0; i < arguments.length; i++) {
  	document.write("<br/>" + arguments[i]);
  };
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
