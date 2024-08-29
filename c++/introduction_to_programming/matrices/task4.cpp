#include <iostream>

using namespace std;

int main() {
    int x, y;
    cin >> y >> x;

    int arr[100][100];

    for (int i = 0; i < y; i++) {
        for (int j = 0; j < x; j++) {
            cin >> arr[i][j];
        }
    }

    int a, b, temp;
    cin >> a >> b;

    for (int i = 0; i < y; i++) {
        temp = arr[i][a];
        arr[i][a] = arr[i][b];
        arr[i][b] = temp;
    }

    for (int i = 0; i < y; i++) {
        for (int j = 0; j < x; j++) {
            cout << arr[i][j] << ' ';
        }

        cout << endl;
    }

    return 0;
}