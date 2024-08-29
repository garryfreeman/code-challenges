#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    int num, sum = 0, count = 0;

    while(true) {
        cin >> num;

        if (num == 0) break;

        sum += num;
        count++;
    }

    cout << setprecision(11) << fixed;
    cout << (double)sum / count;

    return 0;
}