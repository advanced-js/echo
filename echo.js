function echo(){
  for (var i = 0; i < arguments.length; i++) {
  	document.write(arguments[i] + "<br>");
  };
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
console.log("testing");
