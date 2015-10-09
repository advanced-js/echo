var counter = 1;
	
function echo(){	
	var emptyArg = true;
    var html = "This is echo call number <b><i>" + counter + "</i></b> and the arguments are:<br />";
	counter++;
    for (var i=0; i < arguments.length; i++) {
		emptyArg = false;
        html += '<b>' + arguments[i] + '</b><br />';
    }
	if (emptyArg)
		html += '<i>no arguments were provided</i>';
    document.write(html + '<br /><br/>');   
}



echo();
echo('bla');
echo('foo', 'bar', 'baz');
 