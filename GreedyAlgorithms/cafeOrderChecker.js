function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  // Check if we're serving orders first-come, first-served
  let takeOutOrdersCount = 0;
  let dineInOrdersCount = 0;
  let takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  let dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (let i = 0; i < servedOrders.length; i++) {
    let order = servedOrders[i];

    if (
      takeOutOrdersCount <= takeOutOrdersMaxIndex &&
      order === takeOutOrders[takeOutOrdersCount]
    ) {
      takeOutOrdersCount++;
    } else if (
      dineInOrdersCount <= dineInOrdersMaxIndex &&
      order === dineInOrders[dineInOrdersCount]
    ) {
      dineInOrdersCount++;
    } else {
      return false;
    }
  }
  if (
    dineInOrdersCount !== dineInOrders.length ||
    takeOutOrdersCount !== takeOutOrders.length
  ) {
    return false;
  }

  return true;
}

let test1 = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
let test2 = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
let test3 = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);

console.log(test1);
console.log(test2);
console.log(test3);
