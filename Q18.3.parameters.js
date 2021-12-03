
// Write a program where it will console these 3 parameters for odd and even numbers.

// count

// sum

// average

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_even_numbers=0;
var sum_odd_numbers=0;
var count_even_numbers=0;
var count_odd_numbers=0;
var even_numbes=0;
var odd_numbers=0;
for ( var i of elements){
  if ( i%2===0){
    even_numbes+=1
    sum_even_numbers+=i
    count_even_numbers+i
  }else{
    odd_numbers+=1
    sum_odd_numbers+=i
    count_odd_numbers+=i
  }
}
console.log((sum_even_numbers+sum_odd_numbers)/2)
console.log(sum_even_numbers)
console.log(sum_odd_numbers)
// console.log(count_even_numbers)
// console.log(count_odd_numbers)
console.log(even_numbes)
console.log(odd_numbers)