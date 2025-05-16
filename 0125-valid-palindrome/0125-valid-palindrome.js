const isAlphabet = (char) => {
  return 'a' <= char && char <= 'z' || 'A' <= char && char <= 'Z' || '0' <= char && char <= '9';
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    while (left < s.length) {
      if (isAlphabet(s[left])) {
        break;
      }
      left++;
    }

    while (right > 0) {
      if (isAlphabet(s[right])) {
        break;
      }
      right--;
    }

    if (left > right) return true;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};
