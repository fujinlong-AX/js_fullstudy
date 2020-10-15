const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';
const res = str.split('').reduce((accumulator, cur) => {
  accumulator[cur] ? accumulator[cur]++ : accumulator[cur] = 1;
  return accumulator;
}, {});
console.log(res);