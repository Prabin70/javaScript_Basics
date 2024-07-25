//String Concatenation
// console.log("Ram" + "hari");

//opearation in JS will be from left to right

// console.log("1" + 2+3);
//string is more powerful than number
// console.log(1+2+3+"4");
//if we add a number and string, the interpreter converts the number to a srting and concenates both together
//we cannot redeclare same variable name twice, it through error.
//we cannot call tht variable if it is not defined.
//`` = Backtick = Templete literal= String literal;
// console.log("Ram" +" "+ "hari");

// let numberOne = 1;
// let numberTwo = 3;
// sum = numberOne + numberTwo;
// console.log(`The Sum of ${numberOne} and ${numberTwo} is ${sum}`);


// let firstName = "Prabin";
// let lastName = "Shrestha";
// let age = 23;
// let location = "kapan";
// console.log(`My Full name is ${firstName} ${lastName}. My location is ${location}. and I'am ${age} years old.`);



let fname = "Prabin";
let lName = "Shrestha";
let AGE = 19;
console.log(`My ful name is ${fname} ${lName}. I'am ${AGE} years old.`);
//boolean = true or false value 
//falsy value = 0, "", nul , undefined..
//truthy value = 1or except falsy value all are truthy value.

//empty value and 0 are falsy value other value are truthy value.


//==, ===, <, >, <=, >=,
//|| or operator
// && and operator
// ! not operator.

// console.log(1=="1"); //It check only value
// console.log(1==="1"); // it check the both value and datatype.





let age = 20;
if(age >= 18){
    console.log("You can enter bar");

}

else{
    console.log("You cannot enter bar");
}


let fullname = "Joohn Doe";


if(fullname === "hari"){

    console.log("I'am A");

}

else if(fullname === "krishna")
{
    console.log("I'am B");

}
else
{
    console.log("I'am C");
}

let a= true;
console.log(!a);