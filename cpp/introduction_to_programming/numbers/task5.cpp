#include <iostream>

using namespace std;

int main() {
    int p, x, y, k;
    cin >> p >> x >> y >> k;

    int sum = x * 100 + y;

    for (int i = 1; i <= k; i++) {
        sum = sum * (100 + p) / 100;
    }

    int rubs = int(sum) / 100;
    int kops = int(sum) % 100;

    cout << rubs << ' ' << kops;

    return 0;
}