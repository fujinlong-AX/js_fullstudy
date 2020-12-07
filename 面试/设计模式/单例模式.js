let obj = null
function Animal() {
  // ....
  this.name = 'name';
  if (!obj) obj = this;
  return obj;
}
