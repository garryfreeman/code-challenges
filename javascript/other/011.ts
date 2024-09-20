/**
 * Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
 * Необходимо реализовать функцию, которая опросит урлы в том порядке, в котором они идут в массиве,
 * и вызовет callback с массивом ответов ['url1_answer', 'url2_answer', ...] так,
 * чтобы в любой момент времени выполнялось не более limit запросов
 * (как только любой из них завершился, сразу же отправляется следующий)
 * Т.е. нужно реализовать шину с шириной равной limit.
 *
 * Требования:
 * - Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
 *
 * Дополнительно:
 * - Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)
 *
 * Для опроса можно использовать fetch или $-get
 * Ошибки обрабатывать не нужно
 */

// declare function fetch(url: string): Promise<string>;
// declare function $•get(url: string, callback: (res: string) = void): void;

function fetch(url: string) {
  return new Promise((res) => {
    setTimeout(() => {
      res(url);
    }, 2000);
  });
}

async function parallelLimit(urls: string[], limit: number, callback: (result: any[]) => void) {
  const cache = new Map();
  const queue = new Set();
  const result: any[] = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];

    if (cache.has(url)) {
      result[i] = cache.get(url);

      continue;
    }

    if (queue.size >= limit) {
      await Promise.race(queue);
    }

    const request = fetch(url).then((response) => {
      result[i] = response;
      cache.set(url, response);
      queue.delete(request);
    });

    queue.add(request);
  }

  await Promise.all(queue);

  callback(result);
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6',
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/8',
  'https://jsonplaceholder.typicode.com/posts/9',
  'https://jsonplaceholder.typicode.com/posts/10',
];

parallelLimit(urls, 3, console.log);
