onload = function() {
  // echo function is to print out each argument on a new line
  function echo() {

    var createElement = document.createElement('p');
    var innerContent = [];
    var count = 0;
    //if arguments is not zero
    if (arguments.length !== 0) {
      for (var i in arguments) {
        innerContent[count] = "'" + arguments[i] + "'";
        createElement = document.createTextNode(innerContent[count]);
        var linebreak = document.createElement("br");
        document.body.appendChild(createElement);
        document.body.appendChild(linebreak);
        count++;
      }
    } else {
      innerContent = '';
    }
  }
  echo();
  echo('bla');
  echo('foo', 'bar', 'baz');
};