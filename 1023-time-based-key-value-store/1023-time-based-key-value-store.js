const TimeMap = function() {
  this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.map.get(key)) {
    const obj = this.map.get(key);
    obj.arr[timestamp] = value;

    if (obj.length < timestamp) {
      obj.length = timestamp;
    }
  } else {
    const obj = {
      length: timestamp,
      arr: [],
    };

    obj.arr[timestamp] = value;
    this.map.set(key, obj);
  }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  const obj = this.map.get(key);
  if (obj) {
    if (timestamp > obj.length) {
      return obj.arr[obj.length];
    }

    for (let i = timestamp; i > 0; i--) {
      if (obj.arr[i] === undefined) continue;

      return obj.arr[i];
    }
  }

  return "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key, value, timestamp)
 * var param_2 = obj.get(key, timestamp)
 */
