function echo(){
	var result = [];
	for (var i = 0; i < arguments.length; i++) {
		result[i] = arguments[i];
	}
	return console.log(result);
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
