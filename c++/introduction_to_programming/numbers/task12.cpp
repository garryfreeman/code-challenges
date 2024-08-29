#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double a, b, c, d, e, f, x, y, determinant;
    cin >> a >> b >> c >> d >> e >> f;

    determinant = a * d - b * c;

    cout << "determinant: " << determinant << endl;
//
//    if (determinant != 0) {
//        x = (e * d - b * f) / determinant;
//        y = (a * f - e * c) / determinant;
//
//        cout << "2 " << x << " " << y;
//    } else {
//        x = (e * d - b * f) / determinant;
//        y = (a * f - e * c) / determinant;
//
//        if (x == 0 && y == 0) {
//
//        } else {
//            cout << 0;
//        }
//    }

    return 0;
}