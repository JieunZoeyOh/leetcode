/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let begin = 1;
    let end = n;

    while (begin !== end) {
      const middle = Math.ceil((begin + end) / 2);
      const result = isBadVersion(middle);

      if (result) {
        const isPreviousBadVersion = isBadVersion(middle - 1);

        if (!isPreviousBadVersion) return middle;
        if (middle - 1 === 1 && isPreviousBadVersion) return 1;

        end = middle;
      } else {
        begin = middle;
      }
    }

    return end;
  };
};
