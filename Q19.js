
// Count of the elements that is repeated in a list.

var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var k=[]
for(var i of char_list){
    if(!k.includes(i)){
        k.push(i)
    }
}
console.log(k)
for(var j of k){
    count=0;
    for(var x of char_list){
        if(j==x){
            count+=1
        }
    }
    console.log(j,count,"items")
}






