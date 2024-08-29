#include <iostream>

using namespace std;

char toUpperCase(char c) {
    if (c >= 'a' && c <= 'z') {
        int temp = c - 'a';

        return char('A' + temp);
    }

    return c;
}

int main() {
    char c;
    cin >> c;

    cout << toUpperCase(c);

    return 0;
}