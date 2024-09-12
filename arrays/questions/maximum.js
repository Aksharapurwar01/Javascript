function maximum(str) {
  let frequency = {};
  let maxChar = "";
  let maxCount = 0;

  str.split("").forEach((char) => {
    return (frequency[char] = (frequency[char] || 0) + 1);
  });

  for (const char in frequency) {
    if (frequency[char ]> maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return maxChar;
}


const max = maximum("javascript");
console.log(max)
