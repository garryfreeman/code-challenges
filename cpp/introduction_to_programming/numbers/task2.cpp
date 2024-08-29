#include <iostream>
#include <cmath>

using namespace std;

int main() {
    double num;
    cin >> num;

    cout << (int)(num * 10) % 10;

    return 0;
}