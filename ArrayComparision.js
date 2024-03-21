



function test(a,b){
    let Alice=0;
    let Bob=0;
for (let i=0;i<a.length;i++){
    if(a[i]>b[i]){
        Alice++;
    }
    else if(a[i]<b[i]){
        Bob++
    }
    

}
return [Alice, Bob]

}
const a=[1,2,3]
 const b=[3,2,1]
const result = test(a,b)
console.log(result)