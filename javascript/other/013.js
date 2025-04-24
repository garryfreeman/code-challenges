function throttle(fn, delay, ctx) {
  let lastCall = 0;
  let timerId;

  return function (...args) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      fn.apply(ctx, args);
      lastCall = now;
    } else {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        fn.apply(ctx, args);
        lastCall = Date.now();
        timerId = null;
      }, delay - timeSinceLastCall);
    }
  };
}

function test1() {
  const start = Date.now();

  function log(text) {
    const msPassed = Date.now() - start;

    console.log(`${msPassed}: ${this.name} logged ${text}`);
  }

  const throttled = throttle(log, 100, { name: 'me' });

  setTimeout(() => throttled('m'), 0);
  setTimeout(() => throttled('mo'), 22);
  setTimeout(() => throttled('mos'), 33);
  setTimeout(() => throttled('mosc'), 150);
  setTimeout(() => throttled('moscow'), 400);

  // 0 ms: me logged m
  // 100 ms: me logged mos
  // 200 ms: me logged mosc
  // 400 ms: me logged moscow
}

test1();

function test2() {
  const start = Date.now();
  const ctx = { name: 'John' };

  const fn = function (text) {
    console.log(`${Date.now() - start} ${this.name}:${text}`);
  };

  const throttled = throttle(fn, 100, ctx);

  throttled('a'); // исполняется сразу
  throttled('b'); // перезаписывает args
  throttled('c'); // перезаписывает args снова
}

test2();

function test3() {
  const start = Date.now();

  const log = function (text) {
    console.log(`${Date.now() - start}ms ${this.name}: ${text}`);
  };

  const throttled = throttle(log, 100, { name: 'X' });

  throttled('1'); // срабатывает сразу
  setTimeout(() => throttled('2'), 50); // не должен сработать
  setTimeout(() => throttled('3'), 70); // <-- этот "перепишет" args
  // но когда сработает таймер, он возьмёт '3', а не '2'
}

test3();
