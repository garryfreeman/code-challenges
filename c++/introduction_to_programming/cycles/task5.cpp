#include <iostream>

using namespace std;

int main() {
    int n, i = 0;

    while (true) {
        cin >> n;

        if (n == 0) break;

        i++;
    }

    cout << i;

    return 0;
}