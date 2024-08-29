#include <iostream>

using namespace std;

int main() {
    int num, c1, c2, c3, c4, result;
    cin >> num;

    c1 = num / 1000;
    c2 = num % 1000 / 100;
    c3 = num % 100 / 10;
    c4 = num % 10;

    cout << (c1 - c4 + 1) << endl;
    cout << (c2 - c3 + 1) << endl;

    result = (abs(c1 - c4) + abs(c2 - c3)) + 1;

    cout << result;

    return 0;
}