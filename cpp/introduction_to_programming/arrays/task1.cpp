#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size;
    cin >> size;

    vector <int> arr(size);

    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    for (int i = 0; i < arr.size(); i++) {
        if (i % 2 == 0) {
            cout << arr[i] << ' ';
        }
    }

    return 0;
}