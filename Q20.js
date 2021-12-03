// Remove the duplicates and put them in a separate list

var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var a=[]
for(var i of n){
    if (!a.includes(i)){
        a.push(i)
    }
}
console.log(a)




