#include <iostream>

using namespace std;

int main() {
    int n, prev, curr, curr_count = 1, max_count = 1;

    while (true) {
        cin >> n;

        if (n == 0) break;

        if (n != curr) {
            prev = curr;
            curr = n;
            curr_count = 1;
        } else if (n == curr) {
            curr_count++;
        }

        if (curr_count > max_count) {
            max_count = curr_count;
        }
    }

    cout << max_count;

    return 0;
}