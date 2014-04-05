function echo(string1,string2, string3) {
 myAry = new Array();
 myAry[0] = string1;
  myAry[1] = string2;
  myAry[2] = string3;
 for (i=0; i < myAry.length; i++) {
   console.log(myAry[i]);
 }
 }

echo();
echo('bla');
echo('foo', 'bar', 'baz');
