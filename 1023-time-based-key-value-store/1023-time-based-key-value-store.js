
const TimeMap = function() {
  this.store = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.store.get(key)) {
    this.store.set(key, []);
  }

  this.store.get(key).push({ value, timestamp });
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  let result = "";

  if (!this.store.get(key)) {
    return result;
  }

  const list = this.store.get(key);
  let left = 0;
  let right = list.length - 1;
  
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const { value: midValue, timestamp: midTimestamp } = list[mid];

    if (midTimestamp <= timestamp) {
      result = midValue;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
