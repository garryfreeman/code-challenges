#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
    int n, x, a, result = 0;
    cin >> n >> x >> a;

    do {
        result *= x;
        result += a;
        cin >> a;
    } while (n--);

    cout << setprecision(11) << fixed;
    cout << result;

    return 0;
}