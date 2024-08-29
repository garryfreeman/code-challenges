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
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
    }

    cout << count;

    return 0;
}