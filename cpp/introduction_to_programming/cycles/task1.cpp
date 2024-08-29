#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    int i = 1;
    int sqr;

    while (true) {
        sqr = i * i;

        if (sqr <= n) {
            cout << sqr << ' ';

            i++;
        } else {
            break;
        }
    }

    return 0;
}