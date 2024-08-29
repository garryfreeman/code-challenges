#include <iostream>
#include <cmath>

using namespace std;

double power(double a, int n) {
    if (n == 0) {
        return 1;
    } else if (n > 0) {
        return a * power(a, n - 1);
    } else {
        return 1 / power(a, abs(n));
    }
}

int main() {
    double a;
    int n;
    cin >> a >> n;

    cout << power(a, n);

    return 0;
}