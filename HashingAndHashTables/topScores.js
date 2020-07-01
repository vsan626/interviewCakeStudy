function sortScores(unorderedScores, highestPossibleScore) {
  // Sort the scores in O(n) time
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach(score => {
    scoreCounts[score]++;
  });

  const sortedScores = [];

  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];
    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      console.log('time', time, 'count', count)
      sortedScores.push(score);
      console.log('sortedScores', sortedScores)
    }
  }
  console.log('sortedScores', sortedScores)
  return sortedScores;

}

const noScores = sortScores([], 100);
const oneScore = sortScores([55], 100);
const repeatedScores = sortScores([20, 10, 30, 30, 10, 20], 100);
const manyScores = sortScores([37, 89, 41, 65, 91, 53], 100);

console.log('noScores', noScores);
console.log('oneScore', oneScore);
console.log('repeatedScores', repeatedScores);
console.log('manyScores', manyScores);
