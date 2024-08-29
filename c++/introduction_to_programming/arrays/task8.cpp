#include <iostream>

using namespace std;


int main() {
    int size, prev, curr, count = 0;
    cin >> size;

    for (int i = 0; i < size; i++) {
        cin >> curr;

        if (i == 0 || curr != prev) {
            count++;
        }

        prev = curr;
    }

    cout << count;

    return 0;
}