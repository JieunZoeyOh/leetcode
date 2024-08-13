/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphanumeric = (c) => {
  if ("a" <= c && c <= "z") return true;
  if ("A" <= c && c <= "Z") return true;
  if ("0" <= c && c <= "9") return true;

  return false;
};

const isPalindrome = (s) => {
  let startIndex = 0;
  let endIndex = s.length - 1;
  let wordCounter = 0;

  while (startIndex <= endIndex) {
    while (!isAlphanumeric(s[startIndex]) && startIndex < s.length) {
      startIndex++;
    }

    while (!isAlphanumeric(s[endIndex]) && endIndex > -1) {
      endIndex--;
    }

    if (!s[startIndex] && !s[endIndex] && wordCounter === 0) {
      return true;
    } else if (s[startIndex]?.toLowerCase() !== s[endIndex]?.toLowerCase()) {
      return false;
    } else {
      wordCounter++;
    }

    startIndex++;
    endIndex--;
  }

  return wordCounter > 0;
};
