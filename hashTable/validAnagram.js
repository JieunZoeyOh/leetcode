/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCount = countChar(s);
  const tCount = countChar(t);

  for (const key in sCount) {
    if (sCount[key] !== tCount[key]) {
      return false;
    }
  }

  return true;
}

function countChar(str) {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }

  return count;
}
