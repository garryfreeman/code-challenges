#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size, count = 0;
    cin >> size;

    vector <int> arr(size);

    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = 0; i < arr.size(); i++) {
        count = 0;

        for (int j = 0; j < arr.size(); j++) {
            if (j == i) {
                continue;
            } else if (arr[i] == arr[j]) {
                count++;
                break;
            }
        }

        if (count == 0) {
            cout << arr[i] << ' ';
        }
    }

    return 0;
}