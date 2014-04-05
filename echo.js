function echo(){
  // ...
  	var args = arguments.length;
	  if(args > 0){
	  	for (var i=0;i<args;i++){
	 	 document.write(arguments[i] + '<br>');  
	 	}
 	  }	
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
