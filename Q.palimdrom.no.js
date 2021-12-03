var a=["mom","dad","nan","savita","memane","pooja"] 
var count=0;
for (i of a){
    let s=" "
    for(var j=i.length-1; j>=0; j--){
        // console.log(a[j])
        if(a[j]==s){
            s=s+(a[j])
        }
        count=count+1
    }
}
console.log(count)







