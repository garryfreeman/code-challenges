#include <iostream>
#include <vector>

using namespace std;


int main() {
    int size;
    cin >> size;

    for (int i = 0; i < size; i++) {
        int num;
        cin >> num;

        if (num % 2 == 0) {
            cout << num << ' ';
        }
    }


    return 0;
}