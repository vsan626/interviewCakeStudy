function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  // Shuffle the input in place
  if (array.length <= 1) return;
  
  for(let i = 0; i < array.length - 1; i++){
    let randomIndex = getRandom(i, array.length - 1);
    
    if(randomIndex !== i){
      let temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
  }
}


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);