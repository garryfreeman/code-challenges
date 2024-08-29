#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int arr[10][10];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> arr[i][j];
        }
    }

    int  k, x;
    cin >> k;

    if (k < 0) {
        x = abs(k);
        k = 0;
    }

    for (int i = k; i < n && x < n; i++, x++) {
        cout << arr[i][x] << ' ';
    }

    return 0;
}