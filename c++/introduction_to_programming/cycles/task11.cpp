#include <iostream>

using namespace std;

int main() {
    int n, i = 1, prev = 0, curr = 1, acc = 1;
    cin >> n;


    while (acc <= n) {
        acc = prev + curr;
        prev = curr;
        curr = acc;
        i++;
    }

    if (acc == n) {
        cout << i;
    } else {
        cout << -1;
    }

    return 0;
}