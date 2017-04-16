function echo(){
  //check if arguments exist
  if(arguments.length >= 1){
  	//loop through arguments and print to console
  	for (var i=0; i < arguments.length; i++){
	  	console.log(arguments[i]);
	  }
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
