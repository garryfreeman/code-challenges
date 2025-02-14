// Дана вложенная структура файлов и папок.

type TNode = {
  name: string;
  children?: TNode[];
};

const data: TNode = {
  name: 'folder',
  children: [
    { name: 'file1.txt' },
    { name: 'file2.txt' },
    {
      name: 'images',
      children: [
        { name: 'image.png' },
        {
          name: 'vacation',
          children: [{ name: 'crocodile.png' }, { name: 'penguin.png' }],
        },
      ],
    },
    { name: 'shopping-list.pdf' },
  ],
};

/*
Нужно вывести в консоль файлы и папки с отступами, чтобы показать вложенность.
Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы).
*/

/*
folder
  file1.txt
  file2.txt
  images
    image.png
    vacation
      crocodile.png
      penguin.png
  shopping-list.pdf
*/

function printDirectoryStructure(data: TNode) {
  const queue: (TNode & { space?: string })[] = [data];

  while (queue.length) {
    const current = queue.pop()!;
    const { space = '' } = current;

    console.log(space + current.name);

    if (current.children?.length) {
      for (let i = current.children.length - 1; i >= 0; i--) {
        queue.push({ ...current.children[i], space: space + '  ' });
      }
    }
  }
}

console.clear();
printDirectoryStructure(data);
