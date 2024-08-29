#include <iostream>
#include <cmath>

using namespace std;

int MinDivisor(int n) {
    int result = n;

    if (n % 2 == 0) {
        return 2;
    }

    for (int i = 3, isqrt = sqrt(n); i <= isqrt; i += 2) {
        if (n % i == 0) {
            result = i;
            break;
        }
    }

    return  result;
}

bool IsPrime(int n) {
    int min_divisor = MinDivisor(n);

    return n == min_divisor;
}

int main() {
    int n;
    cin >> n;

    if (IsPrime(n)) {
        cout << "YES";
    } else {
        cout << "NO";
    }

    return 0;
}