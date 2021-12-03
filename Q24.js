
// Count unique values inside a list.
// input_list = [1, 2, 2, 5, 8, 4, 4, 8]
// Count = 5 #because [1,2,5,8,4] are unique values.
input_list = [1, 2, 2, 5, 8, 4, 4, 8]
var a=[]
for( var i of input_list){
    if (!a.includes(i)){
        a.push(i)
    }
}
console.log(a)