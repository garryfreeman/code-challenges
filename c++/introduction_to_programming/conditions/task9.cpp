#include <iostream>

using namespace std;

int main() {
    int H, A, B;
    cin >> H >> A >> B;

    int distance_per_day = A - B;
    int result = (H - A + distance_per_day - 1) / distance_per_day + 1;

    cout << result;

    return 0;
}