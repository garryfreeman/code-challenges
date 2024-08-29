#include <iostream>

using namespace std;

int main() {
    int x, y;
    cin >> y >> x;

    int arr[y][x];

    for (int i = 0; i < y; i++) {
        for (int j = 0; j < x; j++) {
            cin >> arr[i][j];
        }
    }

    int max = arr[0][0], maxX = 0, maxY = 0;

    for (int i = 0; i < y; i++) {
        for (int j = 0; j < x; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
                maxX = j;
                maxY = i;
            }
        }
    }

    cout << maxY << ' ' << maxX;

    return 0;
}