

var x=[1,2,3,4,[4,5,6,7],12,34]
var i = 0;
var sum=0;
while(i<x.length){
    if(typeof(x[i])==typeof(x)){
        for(var j = 0;j<x[i].length;j++){
            sum+=x[i][j]
        }

    }
    else{
        sum+=x[i]

    }
    i++;
}
console.log(sum)



