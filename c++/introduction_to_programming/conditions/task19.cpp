#include <iostream>

using namespace std;

int main() {
    int a1, b1, c1, a2, b2, c2, temp, v1, v2;
    cin >> a1 >> b1 >> c1 >> a2 >> b2 >> c2;

    if (a1 > b1) {
        temp = a1;
        a1 = b1;
        b1 = temp;
    }

    if (a1 > c1) {
        temp = a1;
        a1 = c1;
        c1 = temp;
    }

    if (b1 > c1) {
        temp = b1;
        b1 = c1;
        c1 = temp;
    }

    if (a2 > b2) {
        temp = a2;
        a2 = b2;
        b2 = temp;
    }

    if (a2 > c2) {
        temp = a2;
        a2 = c2;
        c2 = temp;a
    }

    if (b2 > c2) {
        temp = b2;
        b2 = c2;
        c2 = temp;
    }

    cout << a1 << b1 << c1 << endl;
    cout << a2 << b2 << c2 << endl;

    if (a1 == a2 && b1 == b2 && c1 == c2 ) {
        cout << "Boxes are equal";
    } else if (a1 >= a2 && b1 >= b2 && c1 >= c2) {
        cout << "The first box is larger than the second one";
    } else if (a1 <= a2 && b1 <= b2 && c1 <= c2) {
        cout << "The first box is smaller than the second one";
    } else {
        cout << "Boxes are incomparable";
    }

    return 0;
}