function echo(arg1, arg2, arg3){
  if (arguments.length === 0) {
    console.log('');
  } else if (arguments.length === 1) {
    console.log(arg1);
  } else {
    console.log(arg1 + '\n' + arg2 + '\n' + arg3);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
