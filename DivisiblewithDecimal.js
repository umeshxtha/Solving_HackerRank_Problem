const arr = [1,1,0,-1,-1]

const arrLength = arr.length
const posArr = arr.filter(num => num > 0).length
const NegArr = arr.filter(num => num < 0).length
const ZeroLength = arrLength - NegArr - posArr


const positiveRatio = posArr/ arrLength
const negativeRatio = NegArr/ arrLength
const zeroRatio = ZeroLength/ arrLength

console.log(positiveRatio.toFixed(6))
console.log(negativeRatio.toFixed(6))
console.log(zeroRatio.toFixed(6))