#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    int arr[100][100];

    int x = 0,
        y = 0,
        x_min = 0,
        y_min = 0,
        x_max = n - 1,
        y_max = m - 1,
        direction = 1;

    for (int a = 1; a <= n * m; a++) {
        if (direction == 1) {
        // from left to right
            arr[x][y] = a;

            if (y == y_max) {
                direction = 2;
                x++;
                x_min++;
            } else {
                y++;
            }
        } else if (direction == 2) {
        // from top to bottom
            arr[x][y] = a;

            if (x == x_max) {
                direction = 3;
                y--;
                y_max--;
            } else {
                x++;
            }
        } else if (direction == 3) {
        // from right to left
            arr[x][y] = a;

            if (y == y_min) {
                direction = 4;
                x--;
                x_max--;
            } else {
                y--;
            }
        } else if (direction == 4) {
        // from bottom to top
            arr[x][y] = a;

            if (x == x_min) {
                direction = 1;
                y++;
                y_min++;
            } else {
                x--;
            }
        }

    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << setw(4) << arr[i][j];
        }

        cout << endl;
    }

    return 0;
}