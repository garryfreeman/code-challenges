#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size, min;
    cin >> size;

    vector <int> arr;

    for (int i = 0; i < size; i++) {
        int num;
        cin >> num;

        if (num % 2) {
            arr.push_back((num));
        }
    }

    if (!arr.empty()) {
        for (int i = 0; i < arr.size(); i++) {
            if (i == 0 || arr[i] < min) {
                min = arr[i];
            }
        }
    } else {
        min = 0;
    }

    cout << min;

    return 0;
}