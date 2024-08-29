#include <iostream>

using namespace std;

int main() {
    int const MKAD_LENGTH = 109;
    int speed, time;
    cin >> speed >> time;

    int distance = speed * time;
    int result = (MKAD_LENGTH + distance % MKAD_LENGTH) % MKAD_LENGTH;

    cout << result;

    return 0;
}