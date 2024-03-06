a = 6;
ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  let sum = 0;
  for ( let i = 0; i <= ar.length - 1; i++) {
    sum += ar[i];
    console.log(sum);
  }
  return sum;
}
simpleArraySum(ar);
const result = simpleArraySum(ar);
console.log(result);
