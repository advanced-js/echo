function echo() {
    if(arguments.length) {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
