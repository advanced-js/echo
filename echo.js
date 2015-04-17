function echo() {
  for ( var val in arguments ) {
      console.log( arguments[val] );
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
