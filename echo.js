function echo(){
	//check for arguments case of zero
	if(arguments.length != 0){
		for( var i in arguments){
 			document.write(" '" + arguments[i]+ "' <br >");
 		}
	} else {
		document.write('');
	} 
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
