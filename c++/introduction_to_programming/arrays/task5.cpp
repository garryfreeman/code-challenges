#include <iostream>

using namespace std;

int main() {
    int size, prev, curr;
    cin >> size;

    for (int i = 0; i < size; i++) {
        cin >> curr;

        if (i != 0) {
            if ((prev < 0 && curr < 0) || (prev > 0 && curr > 0)) {
                if (prev > curr) {
                    cout << curr << ' ' << prev;
                } else {
                    cout << prev << ' ' << curr;
                }

                break;
            }
        }

        prev = curr;
    }

    return 0;
}