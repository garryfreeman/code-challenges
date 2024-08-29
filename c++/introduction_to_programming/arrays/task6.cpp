#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size, prev, curr, temp;
    cin >> size;

    vector <int> arr;

    for (int i = 0; i < size; i++) {
        int num;
        cin >> num;

        if (num >= 0) {
            arr.push_back((num));
        }
    }

    for (int i = 0; i < arr.size(); i++) {
        for (int j = i + 1; j < arr.size(); j++) {
            prev = arr[i];
            curr = arr[j];

            if (prev > curr) {
                temp = prev;
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    cout << arr[0];

    return 0;
}