#include <iostream>

using namespace std;

int main() {
    int n, i = 1;
    cin >> n;

    string answer = "NO";

    while (i <= n) {
        if (i == n) {
            answer = "YES";
            break;
        }

        i *= 2;
    }

    cout << answer;

    return 0;
}