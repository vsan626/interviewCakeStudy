class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {

    // Count the frequency of each word
    let currentWordStartIndex = 0;
    let currentWordLength = 0;
    
    for(let i = 0; i < inputString.length; i++){
      const char = inputString.charAt(i);
      if (i === inputString.length - 1) {
        if( this.helperFunc(char)) {
          currentWordLength += 1;
        }
        if (currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
        }
      } else if (char === ' ' || char === '\u2014'){
        if(currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      } else if (char === '.') {
        if(i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
          if(currentWordLength > 0) {
            const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
      } else if (this.helperFunc(char) || char === '\'') {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }
        currentWordLength += 1;
      } else if ( char === '-') {
        if (i > 0 && this.helperFunc(inputString.charAt(i - 1)) && this.helperFunc(inputString.charAt(i + 1))) {
          if(currentWordLength === 0) {
            currentWordStartIndex = i;
          }
        }
        currentWordLength += 1;
      } else {
        if (currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      }
    }

  }
  
  addWordToMap(word) {
    let newCount;
    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newCount);
    } else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
      this.wordsToCounts.set(word.toLowerCase(), newCount);
    } else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
      this.wordsToCounts.set(word, newCount);
      this.wordsToCounts.delete(this.capitalize(word));
    } else {
      this.wordsToCounts.set(word, 1);
    }
  }
  
  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  helperFunc(input) {
    const charCheck = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return charCheck.indexOf(input) >= 0;
  }

}


let test = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts

console.log(test)