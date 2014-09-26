function echo(){
	for(var i=0, max= arguments.length; i<max; i++) {
		console.log(arguments[i]);
	}
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
