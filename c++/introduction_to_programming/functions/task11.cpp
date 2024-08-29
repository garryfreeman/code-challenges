#include <iostream>

using namespace std;

int counter() {
    int current;
    cin >> current;

    if (current == 0) {
        return current;
    } else {
        return current + counter();
    }
}

int main() {

    cout << counter();

    return 0;
}