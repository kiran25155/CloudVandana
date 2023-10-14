const sentence = "This is an example sentence.";

const words = [];
let word = "";
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] !== ' ') {
    word += sentence[i];
  } else {
    words.push(word);
    word = "";
  }
}
words.push(word);

console.log(words);

const reversedWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  let reversedWord = '';
  for (let j = word.length - 1; j >= 0; j--) {
    reversedWord += word[j];
  }
  reversedWords.push(reversedWord);
}

console.log(reversedWords);
const reversedSentence = reversedWords.join(' ');

console.log(reversedSentence);
