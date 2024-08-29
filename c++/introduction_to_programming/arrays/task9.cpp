#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size, temp;
    cin >> size;

    vector <int> arr(size);

    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = 1; i < arr.size(); i += 2) {
        temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
    }

    for (int e : arr) {
        cout << e << ' ';
    }

    return 0;
}