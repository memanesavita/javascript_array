

// var item=[
//     {name:"bike",price:1000},
//     {name:"tv",price:300},
//     {name:"album",price:200},
//     {name:"phone" ,price:1200}
// ]
// const finditems=item.find((item)=>{
//     return item.name==="album"
// })
// console .log(finditems)




// var item=[
//     {name:"bike",price:1000},
//     {name:"tv",price:300},
//     {name:"album",price:200},
//     {name:"phone" ,price:1200}
// ]
// const filteritem=item.filter((item)=>{
//     return item.price<=100
// })
// console.log(item)
// console.log(filteritem)


// var item=[
//     {name:"bike",price:1000},
//     {name:"tv",price:300},
//     {name:"album",price:200},
//     {name:"phone" ,price:1200}
// ]
// const nameless=item.map((item)=>{
//     return item.name
// })
// console .log(nameless)



// var item=[
//     {name:"bike",price:1000},
//     {name:"tv",price:300},
//     {name:"album",price:200},
//     {name:"phone" ,price:1200}
// ]

// const a=item.some((item)=>{
//     return item.price<=1000
// })
// console.log(a)



// var item=[
//     {name:"bike",price:1000},
//     {name:"tv",price:3000},
//     {name:"album",price:2000},
//     {name:"phone" ,price:4000}
// ]
// const a=item.every((item)=>{
//         return item.price<=4000
//     })
//     console.log(a)




// var item=[
//         {name:"bike",price:1000},
//         {name:"tv",price:3000},
//         {name:"album",price:2000},
//         {name:"phone" ,price:4000}
// ]

// const total=item.reduce((carrenttotal,item)=>{
//     return item.price+carrenttotal

// },0)
// console.log(total)


// var x=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var k=[]
// var i = 0;
// while (i<x.length){
//     z=x[0]
//     k.push(z*1)
//     i=i+1
// }
// console.log(k)



// const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]

// for(let campus in campus_list){

//    console.log(campus)

// }



let languages = ["English", "Java", "Python", "JavaScript"];

// removes the first element of the array
let first = languages.shift()
;
// console.log(first);
console.log(languages);
