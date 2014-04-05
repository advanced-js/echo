function echo(){
  for(var i=0, l=arguments.length; i<l; ++i){
    console.log(arguments[i]);
  }
}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
