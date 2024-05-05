const pairs = {
  "(": ")",
  "{": "}",
  "[": "]"
};

const OPEN = ["(", "{", "["];
const CLOSED = [")", "}", "]"];

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const OPEN = ["(", "{", "["];
  const CLOSED = [")", "}", "]"];
  const memory = [];

  for (let i = 0; i < s.length; i++) {
    if (OPEN.includes(s[i])) {
      memory.push(s[i]);
      continue;
    }

    const index = CLOSED.indexOf(s[i]);
    if (index === -1) {
      continue;
    }

    if (OPEN.indexOf(memory[memory.length - 1]) === index) {
      memory.length -= 1;
    } else {
      return false;
    }
  }

  if (memory.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid2 = function(s) {
  if (s.length % 2 === 1) return false;

  if (CLOSED.includes(s[0])) return false;

  if (OPEN.includes(s[s.length - 1])) return false;

  const memory = [];

  for (let i = 0; i < s.length; i++) {
    if (OPEN.includes(s[i])) {
      memory.push(s[i]);
      continue;
    }

    if (CLOSED.includes(s[i])) {
      if (pairs[memory.pop()] !== s[i]) {
        return false;
      }
    }
  }

  return memory.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid3 = function(s) {
  const memory = [];
  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) { // 여는 괄호인 경우
      memory.push(s[i]);
    } else { // 닫는 괄호인 경우
      if (pairs[memory.pop()] !== s[i]) {
        return false;
      }
    }
  }

  return memory.length === 0;
};
