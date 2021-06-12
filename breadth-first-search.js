const graph = {
  a: ["b", "c"],
  b: ["f"],
  c: ["d", "e"],
  d: ["f"],
  e: ["f"],
  f: ["g"],
};

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    console.log("queue ", queue);
    const current = queue.shift();
    console.log("current ", current);
    console.log("graph[current]", graph[current]);
    console.log("=".repeat(25));

    if (!graph[current]) {
      graph[current] = [];
    } else if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log(breadthSearch(graph, "a", "g"));
