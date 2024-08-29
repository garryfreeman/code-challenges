#include <iostream>

using namespace std;

bool is_num(char n) {
    return '0' <= n && n <= '9';
}

int main() {
    char n;
    cin >> n;

    cout << (is_num(n) ? "yes" : "no");

    return 0;
}