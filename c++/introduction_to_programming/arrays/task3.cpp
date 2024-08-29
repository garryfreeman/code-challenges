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

    for (int i : arr) {
        if (i > 0) {
            count++;
        }
    }

    cout << count;

    return 0;
}