const arr = [100000, 1000001, 100002, 100003, 100004];
function aVeryBigSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length-1; i++) {
    sum += arr[i];
    console.log(sum);
  }
  return sum;
  
  
}
const result = aVeryBigSum(arr)
console.log(result);
