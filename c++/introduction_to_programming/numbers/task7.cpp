#include <iostream>
#include <iomanip>
#include <cmath>

using namespace std;

int main() {
    int num, sum = 0, sum2 = 0, count = 0;

    while(true) {
        cin >> num;

        if (num == 0) break;

        sum += num;
        sum2 += num * num;
        count++;
    }

    double result = sqrt((sum2 - (pow(sum, 2) / count)) / (count - 1));

    cout << setprecision(11) << fixed;
    cout << result;

    return 0;
}