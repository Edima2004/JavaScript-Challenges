//Check the Readme for code explanation and details

let input_1 = 'abwpecd'
let input_2 = 'badceft'

const difference = (a,b)=>{
   const new_a = a.split("")
   const new_b = b.split("")
   console.log(new_a);

   //Get's the similarity
   const firstAnswer = new_a.filter(x => new_b.includes(x))

   console.log(new_a.includes(''));
   const difference_1 = new_a.filter(x => !new_b.includes(x))
   console.log(difference_1);
   const difference_2 = new_b.filter(x => !new_a.includes(x))
   console.log(difference_2);

   return difference_1.concat(difference_2)

}

console.log((difference (input_1, input_2)));

