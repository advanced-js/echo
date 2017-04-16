function echo(){
  // by mroyt
  var result="";
  for (i=0;i<arguments.length;i++){
  	result += (arguments[i]+" ");
  }
console.log(result);

}

echo();
echo('bla');
echo('foo', 'bar', 'baz');
echo('foo', 'bar', 'baz', 'bar', 'baz', 'bar', 'baz');
