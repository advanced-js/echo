function echo(){
     for(var loopCounter = 0; loopCounter < arguments.length; loopCounter++){    
     							//if length is 3 elements, indices are 0,1,2
        console.log(arguments[loopCounter]); 
    }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');


//MY NOTES
// Definition and use of 'arguments': https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

//syntax: 'arguments'

//description: The arguments object is a local variable available within all functions.

//You can refer to a function's arguments within the function by using the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting at 0. For example, if a function is passed three arguments, you can refer to the argument as follows:

// arguments[0]
// arguments[1]
// arguments[2]