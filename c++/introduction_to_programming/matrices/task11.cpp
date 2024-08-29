#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int n, m, num = 1;
    cin >> n >> m;

    int arr[30][30];

    for (int a = 0; a < n + m - 1; a++) {
        for (int j = a; j >= 0; j--) {
            for (int i = 0; i <= a; i++) {
                if (i < n && j < m && i + j == a) {
                    arr[i][j] = num;
                    num++;
                }
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