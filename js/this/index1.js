function foo() {
  console.log(this);
}

var obj = {
  a: 2,
}

foo()