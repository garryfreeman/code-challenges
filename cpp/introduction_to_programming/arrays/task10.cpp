#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size, temp, nextI;
    cin >> size;

    vector <int> arr(size);

    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = size - 1; i > 0; i--) {
        nextI = i + 1 == arr.size() ? 0 : i + 1;
        temp = arr[nextI];
        arr[nextI] = arr[i];
        arr[i] = temp;
    }

    for (int e : arr) {
        cout << e << ' ';
    }

    return 0;
}