//define function, cal function, pass value function, function with return, array function

//syntax of function..

//() paranthesis, bracket
//{} curly braces, block, object
//[] 

//function name(){}

// function sum(){
//     console.log("My name is Prabin Shrestha");  //function define

// }


//function will not execute unless we call it, we have to call the function to execute thte function code block
// sum();  //function call



// we can alos declare the variable with the function in the same line.

// let name = function(){
//     console.log("My  name is Prabin.");
// }

// console.log("a");
// console.log("Its me dada");
// name();

//pass value to function

// let sum = function(z, x, c){

    //(z,x,c is the parameter)
// console.log(z+x);
// console.log(c+x);
// };

// sum(2, 3, 4);  //arguments

//It is not eneessary to have same number of arguments and parameters

//default values 


// let add = function(x,y, z){
// console.log(x);
// console.log(y);
// console.log(z);
// }

// add(2,3,4);



// let add = function(x,y, z = 6){
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     }
    
//     add(2,3)


//function with return 

// let sum = function(a,b,c = 10){
//     let add = a+b-c;
//     return add;

// }

// let output = sum(2,5);
// console.log(output);

//functio without return, cal normally :sum()
//function with return , call by store it in a variable like : let output = sum()


//arrow function 
//syntax;
//=()=>{}
    // let sum = (a,b,c)=>{
    //     console.log("It's me daada");
    //     console.log(a*c);
    //     let d = c+a;
    //     return d;
    // }

    // let output = sum(2,3,5);
    // console.log(output);


    // let sum=(num1, num2)=>{
    //     let num3= num1+num2;
    //     return num3;
    // }

    // let output = sum (3,2);
    // console.log(output);

    //Jaavscript is a dynamic language because a variable can be stored different value at a different time.

    // let name = "Prabin";
    // name = "DADA";
    // console.log(name);
    // name = true;
    // console.log(name);

//JavaScript can return nnly one value.
//return value is the last value of the retunnumbers i.e 4;
    // let sum =()=>{
    //     return 1,2,3,4;

    // }

    // let out = sum();
    // console.log(out);

    //Newe date in javascript

    // console.log(new Date()); // output = 2024-07-19T11:37:59.235Z
    // console.log(new Date().toDateString()) // output = Fri Jul 19 2024
    // console.log(new Date().toLocaleDateString()); //7/19/2024
    // console.log(new Date().toLocaleString()); //19/2024, 5:23:53 PM
    // console.log(new Date().toTimeString()); //17:24:11 GMT+0545 (Nepal Time)

    //constant vlaue cannot be changed but ew can change the value in let varable.

    //length
    //  let LengthName = "Prabin";
    //  if(LengthName.length < 3){
    //     console.log("Name cannot be less than three words");
    //  }

    //  else{
    //     console.log("You can enter");

    //  }

    let name = "NEWTON";
    console.log(name.toLowerCase());
    let name1 = "chabahil";
    console.log(name.toUpperCase());

    // let Name = "newton institute";
    // console.log(Name.toCapitalize());



