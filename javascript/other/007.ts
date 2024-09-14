import { test } from '../tools';

const graph: Record<string, string[]> = { A: ['B', 'D'], B: ['C', 'N', 'Z'], D: ['E', 'F'], F: ['S'] };

function fetchFlights(from: string): string[] {
  return graph[from] ?? [];
}

function findPath(A: string, B: string, fetchFlights: (from: string) => string[]): string[] {
  const result: string[] = [B];

  for ( ) {}


  return result;
}

// function findPath(A: string, B: string, fetchFlights: (from: string) => string[]): string[] {
//   console.log(A, B);
//   const result: string[] = [A];
//   const possibleDestinations = fetchFlights(A);

//   if (possibleDestinations.includes(B)) {
//     // console.log(possibleDestinations, B);
//     result.push(B);
//   } else {
//     for (let dest of possibleDestinations) {
//       const a = findPath(dest, B, fetchFlights);
//       result.push(...a);

//       if (a.length) {
//         break;
//       }
//     }
//   }

//   return result;
// }

test(() => findPath('A', 'N', fetchFlights), ['A', 'B', 'N']); // Promise.resolve(['A', 'B', 'N'])
test(() => findPath('A', 'S', fetchFlights), ['A', 'D', 'F', 'S']); // Promise.resolve(['A', 'D', 'F', 'S'])
// test(() => findPath('B', 'S', fetchFlights), ['A', 'B', 'N']); // Promise.reject(new Error( 'No way'))
