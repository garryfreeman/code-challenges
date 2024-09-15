import { test } from '../tools';

const graph: Record<string, string[]> = { A: ['B', 'D'], B: ['C', 'N', 'Z'], D: ['E', 'F'], F: ['S'] };

function fetchFlights(from: string): string[] {
  return graph[from] ?? [];
}

function findPath(A: string, B: string, fetchFlights: (from: string) => string[]): string[] {
  const queue: string[] = [];
  const map: Record<string, string> = {};
  const visited: Record<string, boolean> = {};

  fetchFlights(A).forEach((flight) => {
    map[flight] = A;
    queue.push(flight);
  });

  const findWayBack = (current: string, acc: string[] = []) => {
    acc.push(current);

    if (map[current] === A) {
      acc.push(map[current]);
    } else {
      findWayBack(map[current], acc);
    }

    return acc;
  };

  while (queue.length) {
    const current = queue.shift()!;

    if (visited[current]) {
      continue;
    }

    visited[current] = true;

    if (current === B) {
      return findWayBack(current).reverse();
    }

    fetchFlights(current).forEach((flight) => {
      map[flight] = current;
      queue.push(flight);
    });
  }

  return [];
}

test(() => findPath('A', 'D', fetchFlights), ['A', 'D']);
test(() => findPath('A', 'N', fetchFlights), ['A', 'B', 'N']);
test(() => findPath('A', 'S', fetchFlights), ['A', 'D', 'F', 'S']);
test(() => findPath('B', 'S', fetchFlights), []);
