function getProductsOfAllIntsExceptAtIndex(intArray) {
  if(intArray.length < 2){
    throw new Error('getting product of numbers at other indices require at lease 2 numbers')
  }
  const productsOfAllIntExceptIndex = [];
  
  let productSoFar = 1;
  for(let i = 0; i < intArray.length; i++){
    productsOfAllIntExceptIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  
  productSoFar = 1;
  for(let j = intArray.length - 1; j >= 0; j--){
    productsOfAllIntExceptIndex[j] *= productSoFar;
    productSoFar *= intArray[j]
  }
  return productsOfAllIntExceptIndex;
}

let test1 = getProductsOfAllIntsExceptAtIndex([4, 6, 5, 2]);
let test2 = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
let test3 = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);

console.log(test1);
console.log(test2);
console.log(test3);
