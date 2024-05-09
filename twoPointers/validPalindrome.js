/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  let forward = 0;
  let backward = s.length - 1;

  while (forward < backward) {
    while (forward < backward && !isAlphanumeric(s[forward])) {
      forward++;
    }
    while (forward < backward && !isAlphanumeric(s[backward])) {
      backward--;
    }
    if ((s[forward] + "").toLowerCase() !== (s[backward] + "").toLowerCase()) return false;

    forward++;
    backward--;
  }

  return true;
};

function isAlphanumeric(char) {
  if ("a" <= char && char <= "z") {
    return true;
  }
  if ("A" <= char && char <= "Z") {
    return true;
  }
  if ("0" <= char && char <= "9") {
    return true;
  }
  return false;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome2(s) {
  const str = s.toLowerCase().replaceAll(" ", "");
  const array = [...str].map((item) => {
    if (("a" <= item && item <= "z") || ("0" <= item && item <= "9")) {
      return item;
    } else {
      return "";
    }
  });
  const a = array.join("");
  const b = array.reverse().join("");
  return a === b;
}
