#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int n, m, num = 1;
    cin >> n >> m;

    int arr[30][30];

    for (int i = 0; i < n; i++) {
        if (i % 2) {
            for (int j = m -1; j >= 0; j--) {
                arr[i][j] = num;
                num++;
            }
        } else {
            for (int j = 0; j < m; j++) {
                arr[i][j] = num;
                num++;
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