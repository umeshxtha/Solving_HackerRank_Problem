let num=5

for(let i=0;i<=num;i++) {
    let step = "" ;
    for(j=0;j<num;j++) {
        if(j>=i-1){
            step += "#"
        }
        else{
            step += " "
        }
    }
    console.log(step)
}
