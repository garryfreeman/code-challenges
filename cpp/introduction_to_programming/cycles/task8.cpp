#include <iostream>

using namespace std;

int main() {
    int n, max_int = 0, count = 0;

    while (true) {
        cin >> n;

        if (n == 0) break;

        if (n > max_int) {
            max_int = n;
            count = 1;
        } else if (n == max_int) {
            count++;
        }
    }

    cout << count;

    return 0;
}