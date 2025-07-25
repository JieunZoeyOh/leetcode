/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const courseSchedules = Array.from ({ length: numCourses }, () => []);
  const prereqCount = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    courseSchedules[prereq].push(course);
    prereqCount[course]++;
  }

  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (prereqCount[i] === 0) {
      queue.push(i);
    }
  }

  let finishedCount = 0;

  while (queue.length > 0) {
    finishedCount++;

    const currentCourse = queue.shift();
    const nextCourses = courseSchedules[currentCourse];

    for (const nextCourse of nextCourses) {
      prereqCount[nextCourse]--;

      if (prereqCount[nextCourse] === 0) {
        queue.push(nextCourse);
      }
    }
  }

  return finishedCount === numCourses;
};
