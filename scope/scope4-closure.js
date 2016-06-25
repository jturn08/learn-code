function foo() {
  var bar;
  quux = 7;
  function zip() {
    var quux = 1;
    bar = true;
  }
  return zip;
}
