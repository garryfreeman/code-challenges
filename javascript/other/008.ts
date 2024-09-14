/**
Необходимо написать функцию создающую пространство имен.
На вход подается строка вида: "a.b.c.d.e",
на выходе ожидаем получить вложенные друг в друга объекты.
**/

function namespace(str: string) {
  const chars = str.split('.');
  let result = {};

  chars.reduce<Record<string, any>>((prev, current) => {
    prev[current] = {};

    return prev[current];
  }, result);

  return result;
}

console.log(JSON.stringify(namespace('a.b.c.d.e'))); // {"a":{"b":{"c":{"d":{"e":{}}}}}}
console.log(namespace('')); // {}
