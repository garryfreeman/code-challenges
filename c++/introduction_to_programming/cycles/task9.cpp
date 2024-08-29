#include <iostream>

using namespace std;

int main() {
    int n, max_int = 0, pre_max = 0;

    while (true) {
        cin >> n;

        if (n == 0) break;

        if (n >= max_int) {
            pre_max = max_int;
            max_int = n;
        } if (n > pre_max) {
            pre_max = n;
        }
    }

    cout << pre_max;

    return 0;
}