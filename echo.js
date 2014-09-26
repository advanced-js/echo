/*
function echo(){
  // ...
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
*/


//Modify echo.js to print out each argument to the echo() function on a new line.
function echo() {

    //determine number of arguments passed into echo function
    var number_of_arguments = arguments.length;

    //loop through each argument and log to the console
    for ( var i = 0; i<number_of_arguments; i++ ) {
        console.log( arguments[i] );
    }

}

echo();

echo('bla');

echo('foo', 'bar', 'baz');
