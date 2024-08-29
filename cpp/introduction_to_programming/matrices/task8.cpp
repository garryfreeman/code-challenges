#include <iostream>

using namespace std;

int main() {
    int n, m, k;
    cin >> n >> m;

    int arr[20][20];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> arr[i][j];
        }
    }

    cin >> k;

    for (int i = 0; i < n; i++) {
        int count = 0;

        for (int j = 0; j < m; j++) {
            if (arr[i][j]) {
                count = 0;
            } else {
                count++;
            }

            if (count == k) {
                cout << i + 1;

                return  0;
            }
        }
    }

    cout << 0;

    return 0;
}