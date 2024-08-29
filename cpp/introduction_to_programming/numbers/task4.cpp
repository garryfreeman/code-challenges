#include <iostream>

using namespace std;

int main() {
    int p, x, y;
    cin >> p >> x >> y;

    double initial_sum = x * 100 + y;
    double after_year_sum = initial_sum + (initial_sum / 100 * p);
    int rubs = int(after_year_sum) / 100;
    int kops = int(after_year_sum) % 100;

    cout << rubs << ' ' << kops;

    return 0;
}