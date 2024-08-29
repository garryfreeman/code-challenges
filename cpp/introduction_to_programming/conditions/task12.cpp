#include <iostream>

using namespace std;

int main() {
    int x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;

    int x_min = x1 - 1;
    int x_max = x1 + 1;
    int y_min = y1 - 1;
    int y_max = y1 + 1;

    if (x2 >= x_min && x2 <= x_max && y2 >= y_min && y2 <= y_max) {
        cout << "YES";
    } else {
        cout << "NO";
    }

    return 0;
}
