// a variable will be known within its block from the line whereit is defined.
// ie
// {
//   let a = 10;
//   console.log(a); // it will dispay a nuber 10. because it lies insode of the block.
// }
// console.log(a);
// noe this will throw an error because the diplayed "a" is not lying inside of the block.

// {
//parent block;
//   let a = 1;
//   {
//child block;

//     a = 10;
//   }
//   console.log(a);
// }

//1. When a variable is called, first, it is searched in its own block, if a varible is not find in that block, then it will be searched in its parent block.

//2.  A varible cannot be defined twice (redefined) in same   block.but we can redefine same variable in the different block.

// {
//     let a = 10;
//     {
//         let a = 12;
//         console.log(a)
//     }
//     console.log(a);
// }

//rest operator
//Spread Operator
{
  let a = 1;
  //parent block
  {
    //child block
    a = 12;
    // console.log(a);
  }
  console.log(a);
}
