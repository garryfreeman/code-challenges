#include <iostream>

using namespace std;

int main() {
    int N, M, X, Y, E, D, short_side, long_side;
    cin >> N >> M >> X >> Y;

    if (N > M) {
        short_side = M;
        long_side = N;
    } else {
        short_side = N;
        long_side = M;
    }

    E = short_side - X;
    D = long_side - Y;

    cout << min(min(X, E), min(Y, D));

    return 0;
}