/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const graph = new Array(numCourses).fill(0).map(() => []);
  const visited = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  const dfs = (course) => {
    if (visited[course] === 1) return false;
    if (visited[course] === 2) return true;

    visited[course] = 1;

    for (const prereq of graph[course]) {
      if (!dfs(prereq)) return false;
    }

    visited[course] = 2;

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};
