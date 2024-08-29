export function test<T>(callback: () => T, expected: T, name?: string) {
  const result = callback();
  let success = expected === result;

  if (typeof expected === 'object' && expected !== null) {
    success = JSON.stringify(expected) === JSON.stringify(result);
  }
  console.log('▼'.repeat(50));
  name && console.log('Test:', name);
  console.log('- expected:', expected);
  console.log('- result:  ', result);
  console.log(success ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m', '= equal:', success);
  console.log('▲'.repeat(50));
}
