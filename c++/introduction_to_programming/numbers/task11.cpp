#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double a, b, c, d, e, f, x, y, determinant;
    cin >> a >> b >> c >> d >> e >> f;

    determinant = a * d - b * c;
    x = (e * d - b * f) / determinant;
    y = (a * f - e * c) / determinant;

    cout << x << ' ' << y;

    return 0;
}