
// How to find all pairs in an array of integers whose sum is equal to the given number?

// Sample Input:


var number=30
var n = [10, 11, 12, 13, 14, 17, 18, 19] 
var number =30;
x=[]
for(var i of n){
    for(var j of n){
        if( i+j===number){
        x.push([i,j])
        }
    }
}
console.log(x)

