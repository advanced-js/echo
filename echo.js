function echo() {
    for (var i = 0; i < arguments.length; i += 1) {
        console.log(arguments[i] + '\n');
    }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
