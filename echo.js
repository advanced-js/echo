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
    console.log(arguments);
}

echo();

echo('bla');

echo('foo', 'bar', 'baz');
