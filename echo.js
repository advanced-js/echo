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

function echo(x) {
    console.log(x);
}

echo('bla');

//ALTERNATE SOLUTION:

function echo() {
    console.log(arguments[0]);
}

echo('bla');