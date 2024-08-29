#include <iostream>
#include <vector>

using namespace std;

// Известно, что на доске 8×8 можно расставить 8 ферзей так, чтобы они не били друг друга. Вам дана расстановка 8 ферзей на доске, определите, есть ли среди них пара бьющих друг друга.
// Формат входных данных
//
// Программа получает на вход восемь пар чисел, каждое число от 1 до 8 - координаты 8 ферзей.
// Формат выходных данных:
// Если ферзи не бьют друг друга, выведите слово NO, иначе выведите YES.


int main() {
    int size = 8, x1, y1, x2, y2;

    vector <int> vertical(size);
    vector <int> horizontal(size);

    for (int i = 0; i < size; i++) {
        cin >> vertical[i];
        cin >> horizontal[i];
    }

    string result = "NO";

    for (int i = 0; i < size; i++) {
        if (result == "YES") {
            break;
        }

        x1 = horizontal[i];
        y1 = vertical[i];

        for (int j = i + 1; j < size; j++) {
            x2 = horizontal[j];
            y2 = vertical[j];

            if (x1 == x2 || y1 == y2 || x1 + y1 == x2 + y2 || x1 + y2 == y1 + x2) {
                result = "YES";

                break;
            }
        }
    }

    cout << result;

    return 0;
}