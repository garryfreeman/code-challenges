#include <iostream>

using namespace std;

char switchCase(char c) {
    if (c >= 'a' && c <= 'z') {
        int temp = c - 'a';

        return char('A' + temp);
    } else if (c >= 'A' && c <= 'Z') {
        int temp = c - 'A';

        return char('a' + temp);
    }

    return c;
}

int main() {
    char c;
    cin >> c;

    cout << switchCase(c);

    return 0;
}