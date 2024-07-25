// let firstValue = [1, 3, 4, 5];
// //output = 100, 300, 0, 500.
// let result = firstValue.map((value, index) => {
//    if(value % 2 === 0){
//     return value *0;
//    } 

//    else{
//     return value * 100;
//    }

// });
// console.log(result);


// let name = ["my", "name", "is"];
// let output = name.map((value, index)=>{
//     return value.toUpperCase() + `N`;
// });
// console.log(output);

//["R", "a", "m"]

// let list = ["r", "a", "m"];
// let name = list.map((value, index)=>{
// if(index === 0){
//     return value.toUpperCase();
// }
//     else{
//         return value;
//     }

// });
// console.log(name);


//Split => CONVERT INTO ARRAY
//join => convert array into string.

// console.log("ramhari".split("a"));
// console.log("KrishnaKumar".split("r"));
// console.log("Prabin".split("a"));

// let myName = ["p", "r", "a", "b", "i", "n"].join("");
// console.log(myName);

// console.log('my name is prabin shrestha'.split(" "));

// for(let i = 0; i <= 100; i=i+1){
//     console.log("Hey brudaa");
// }

//i = 0; (initialization) it runs only at a time 
//1<=100; (Main condition) this condition runs until it meet its conditions. i.e. = (i <= 100)
//i=i+1 || (i++) (after thought)  this condition executed everytime teh loop body is executed.

// # for loop repeats until a specified condition evaluates to false.

// let arr = ["P", "r", "a", "b", "i", "i"];
// let output = arr.filter((value, index) =>{
// if(value === "a"){
//     return true;
// }
// else{
//     return false;
// }
// });


//filter = output elements must be inputs elements.
// let anotherList = [1,2,3,4];
// let last = anotherList.filter((value, index) =>{
//     if(value % 2 ===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(last);

// let odd = [1, 3, 33, 89, 98, 2, 4, 6, 90];
// let output =odd.filter((value, index) => {
//     if(value >55){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(output);


// let personName = ["ram", "Hari", "John"];
// let output = personName.filter((value, index)=>{
//     if(value.length > 3){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(output);


// let arr = [1,2,3,4];
// let result = arr.find((value, index)=>{
//     return true;
// });
// console.log(result);

//map return everything
//find return first match
//filter return true values 


// let input = ["", "ram", "Krishna", "hari", 0, 1, 2, null, undefined, true, false];
// let out = input.filter((Boolean));
// console.log(out); //output : [ 'ram', 'Krishna', 'hari', 1, 2, true ]


//includes only gives a true and false value.

// let values = ["ram", "hari", "Prabin"];
// console.log(values.includes("samju"));

// let ourName = () =>{

    
// }
// let ourOutput = ourName("Prabin", "Shrestha");

// let list =[1,2,3,4];
//push => ADD THE VALUE TO THE LAST ELEMENTS OF AN ARRAY
//pop =remove the last elements of an array
// unSHIFT => Push the value to the first of an array
//shift => remove the first elements of of an array
// list.push(10); //[ 1, 2, 3, 4, 10 ]
// list.pop(list) //[ 1, 2, 3 ]

// list.unshift("Ram") //[ 'Ram', 1, 2, 3, 4 ]
// list.shift(11) //[ 2, 3, 4 ]
// console.log(list)

// let alphabet = ["a", "v", "n", "s", "l"];

// let result = alphabet.sort();
// console.log(result);


// let numbers = [1, 3, 7, 19, 10, 11,12];
// let result = numbers.sort((x, y)=>{
//     return x - y;
// });
// console.log(result);  //output = [
//    [1,  3,  7, 10,
//    11, 12, 19
//  ]


// let name = ["Prabin", "Aaryan", "Alish", "Asish"];
// let result = name.sort();
// console.log(result); //OUTPUT = [ 'Aaryan', 'Alish', 'Asish', 'Prabin' ]


// let name = [1,2,4,5,6,6];
// let reuslt = name.reduce((previous, current)=>{
//     return previous + current;
// },0);
// console.log(reuslt);


let number = [2,3,4,5,6,7,8,9,12];

let result = number.filter((value, index)=>{
   if(value % 2=== 0)
{
return true
}
else{
    return false;
}

}).reduce((prev, curr) =>{
    return prev + curr;
},0);
console.log(result);

let even = [100, 200, 300, 400];
let output = even.filter((value, index)=>{
   if(value % 2 === 0){
    return true;
   }
   else{
    return false;
   }

})




