function echo(){
  for (i = 0; i < arguments.length; i++){
  	console.log(arguments[i] + '\n');
	};
};

//echo();
//echo('bla');
echo('foo', 'bar', 'baz');
