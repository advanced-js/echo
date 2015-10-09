function echo(){
  for (arg of arguments){
  	console.log(arg);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
