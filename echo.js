// // PART 1:
// // echo();
// // should print nothing

// function echo() {
//     console.log();
// }

// echo();

//------------------------
//PART 2:
//echo('bla');
// should print
//
// 'bla'

// function echo(x) {
//     console.log(x);
// }

// echo('bla');

// //ALTERNATE SOLUTION:

// function echo() {
//     console.log(arguments[0]);
// }

// echo('bla');

//------------------------
//PART 3:
//echo('foo', 'bar', 'baz');
// should print
//
// 'foo'
// 'bar'
// 'baz'

function echo() {
    for (var x=0; x <= arguments.length - 1; x++)
    console.log(arguments[x]);
}

echo('foo', 'bar', 'baz');