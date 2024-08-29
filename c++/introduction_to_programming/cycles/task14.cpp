#include <iostream>

using namespace std;

int main() {
    int n, a = 0, b = 0, c = 0, top_count = 0, steps = 0, min_steps;

    while (true) {
        cin >> n;

        if (n == 0) break;

        a = b;
        b = c;
        c = n;

        if (a && b && c && a < b && b > c) {
            top_count++;

            if (steps < min_steps && top_count >= 2) {
                min_steps = steps;
            }

            steps = 0;
        }

        if (top_count >= 1) {
            steps++;
        }
    }

    if (top_count > 1) {
        cout << min_steps;
    } else {
        cout << 0;
    }

    return 0;
}