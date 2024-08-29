#include <iostream>

using namespace std;

int main() {
    int n, a, b, c, result = 0;

    while (true) {
        cin >> n;

        if (n == 0) break;

        a = b;
        b = c;
        c = n;

        if (a && b && c && a < b && b > c) {
            result++;
        }
    }

    cout << result;

    return 0;
}