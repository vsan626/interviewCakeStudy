function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  if(arrayOfInts.length < 3){
    throw new Error('Less than 3 items')
  }
  
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  
  for (let i = 2; i < arrayOfInts.length; i++) {
    const current = arrayOfInts[i];
    
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );
    
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );
    
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    )
    
    highest = Math.max(highest, current);
    
    lowest = Math.min(lowest, current);
    
  }
  
  return highestProductOf3;
  
}


let test1 = highestProductOf3([1, 2, 3, 4])
let test2 = highestProductOf3([6, 1, 3, 5, 7, 8, 2])
let test3 = highestProductOf3([-5, 4, 8, 2, 3])
let test4 = highestProductOf3([-10, 1, 3, 2, -10])

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)