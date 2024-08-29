#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size, prev, curr;
    cin >> size;

    vector <int> arr;

    for (int i = 0; i < size; i++) {
        cin >> curr;

        if (i != 0 && curr > prev) {
            arr.push_back(curr);
        }

        prev = curr;
    }

    for (int i : arr) {
        cout << i << ' ';
    }


    return 0;
}