<details>
  <summary><h2>문제</h2></summary>
  
  <h2><a href="https://leetcode.com/problems/two-sum">1. Two Sum</a></h2>
  <h3>Easy</h3>
  <hr>
  <p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

  <p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

  <p>You can return the answer in any order.</p>

  <p>&nbsp;</p>
  <p><strong class="example">Example 1:</strong></p>

  <pre>
    <strong>Input:</strong> nums = [2,7,11,15], target = 9
    <strong>Output:</strong> [0,1]
    <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
  </pre>

  <p><strong class="example">Example 2:</strong></p>

  <pre>
    <strong>Input:</strong> nums = [3,2,4], target = 6
    <strong>Output:</strong> [1,2]
  </pre>

  <p><strong class="example">Example 3:</strong></p>

  <pre>
    <strong>Input:</strong> nums = [3,3], target = 6
    <strong>Output:</strong> [0,1]
  </pre>

  <p>&nbsp;</p>
  <p><strong>Constraints:</strong></p>

  <ul>
    <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
    <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
    <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
    <li><strong>Only one valid answer exists.</strong></li>
  </ul>

  <p>&nbsp;</p>
  <strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code>
<font face="monospace">&nbsp;</font>time complexity?  
</details>


## 🧐 다른 접근 방식

### 내가 작성한 코드의 문제점
- 이중 for문이므로 시간 복잡도가 O(n^2)이다.

### 개선할 수 있는 방법?
- Map을 활용하기

### Map을 사용했을 때의 장점
- Map의 경우 값을 찾고 저장할 때의 시간 복잡도가 O(1)이다.
- 결국 이 함수의 최종 시간 복잡도는 O(n)이다.
```js
function twoSum (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = map.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }

    map.set(nums[i], i);
  }
}
```

### Map과 Object

#### 공통점

- 키와 값의 모음

#### 차이점

|   |차이점|
|---|---|
|key|Map: 기본적으로 키를 포함하지 않는다. 직접 set했을 때만 key가 만들어진다.<br />Object: 기본적으로 몇 가지 키를 이미 가지고 있다(프로토 타입). 따라서 새로운 키를 추가할 때 겹칠 수 있다.|
|보안|Map: 안전하다. 직접 넣은 키와 값만 기억한다.<br />Object: 다른 사람이 `Object`에 새로운 키를 추가하면 기존의 것이 바뀔 수 있다. ([객체 주입 공격](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md))|
|키의 종류|Map: 모든 값이 키가 될 수 있다.(함수, 객체, 원시값 포함)<br />Object: `Object`에서는 키가 문자열이나 Symbol만 될 수 있다.|
|키의 순서|Map: 키를 넣은 순서를 기억해 넣은 순서대로 꺼낼 수 있다.<br />Object: 일반적인 Object의 키는 정렬되어 있지만 항상 그런것은 아니며 순서가 복잡하다.|
|크기(size)|Map: 몇 개의 키-값 쌍이 있는지 바로 알 수 있다. `map.size`<br />Object: 우회적인 방법을 사용한다. `Object.keys(obj).length`|
|순회 (Iteration)|Map: 쉽게 순회할 수 있다. `for (let [key, value] of map) {}`<br />Object: 바로 반복할 수 없다. `Object.keys()`, `Object.entries()`, `for...in`|
|성능|Map: 키-값 쌍을 자주 추가하고 삭제할 때 더 빠르게 동작한다.<br />Object: 키-값 쌍을 자주 추가하고 삭제하는 데 최적화되어 있지 않다.|
|직렬화|Map: 직렬화 또는 구문 분석에 대한 기본 지원이 없다. [replacer 활용 방법 참고](https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map)<br />Object: JSON으로 쉽게 변환할 수 있다. `JSON.stringify()`, `JSON.parse()`|

### Object({})를 사용하지 않고 Map을 사용하는 이유?
- 숫자 키 사용: 문제에서 배열의 숫자 값을 키로 사용하기 때문에 Map의 데이터 타입에 대한 유연성이 유리하다. 객체에서는 숫자가 자동으로 문자열로 변환되지만, Map에서는 숫자 그대로 사용된다.
- 빠른 조회: Map은 평균적으로 O(1) 시간 복잡도로 값을 조회할 수 있다. 이는 해시맵 기반 자료 구조의 장점으로, 빠르게 값을 찾고자 할 때 매우 유용하다.
- 효율적인 메모리 사용 및 성능: Map은 많은 요소를 추가하고 삭제하는 경우, 객체보다 성능이 더 좋을 수 있다. 이는 대규모 데이터 집합을 처리할 때 유리하다.

### for문을 돌면서 map에 추가하는 것과 처음 시작할 때 map에 값을 할당하는 것의 차이가 있을까?
```js
function twoSum (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementIndex = map.get(complement);

    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }

    map.set(nums[i], i);
  }
}

function twoSum (nums, target) {
  const map = new Map();

  // 처음에 nums 배열의 모든 값을 map에 넣어놓음
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complementIndex = map.get(target - nums[i]);

    if (complementIndex !== undefined && complementIndex !== i) {
      return [i, complementIndex];
    }
  }
}
```
- 첫 번째 방법: for문을 돌려서 계속 Map을 업데이트하는 과정이 발생
- 두 번째 방법: 처음에 완전히 구축되며 이후에는 검색 작업만 수행된다.
- JavaScript 엔진의 최적화 방식이나 캐싱 메커니즘에 따라 성능 차이가 발생할 수 있다.
- 돌려봤을 때 유의미한 차이가 보이진 않았다.
