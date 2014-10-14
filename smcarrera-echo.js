// JavaScript Document

/*version 1, using ' Array.prototype.slice.call(arguments);'*/

function echo(stuff){
	 var args = Array.prototype.slice.call(arguments);
	 	for (i=0; i<args.length; i++){
			var word = args[i]
			console.log (word);
		}
	}
  

/*version 2, removing ' Array.prototype.slice.call(arguments);'*/


function echo(stuff){
	 	for (i=0; i<arguments.length; i++){
			var word = arguments[i]
			console.log (word);
		}
	}


echo();
echo('bla');
echo('foo', 'bar', 'baz');