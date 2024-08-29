#include <iostream>

using namespace std;

int main() {
    int n, i = 1, prev = 0, curr = 1, result = 1;
    cin >> n;


    while (i < n) {
        result = prev + curr;
        prev = curr;
        curr = result;

        i++;
    }

    cout << result;

    return 0;
}