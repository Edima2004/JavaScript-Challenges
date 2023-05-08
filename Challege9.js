//!Challenge 9
//* Title - Identifying Unique Characters

const Unique = (args)=> {
   const new_args = args.split('');
   let values = []
   let excessValues = []
   const new_values = new_args.map((letter, index)=>{
      if (values.indexOf(letter) !== -1){
         //values = [...values]
         excessValues.push(letter)
         return ''
      }
      else{
         values.push(letter)
         return letter
      }
   })
   console.log(args.split());
  
   return [new_values.join(' '), excessValues]
}

let people = 'unique';

console.log(Unique('abcde'));
console.log(Unique('abcacdebf'));
