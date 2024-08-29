#include <iostream>
#include <vector>

using namespace std;

// https://stepik.org/lesson/13025/step/16?thread=solutions&unit=4377

int main() {
    int N, K, start, end;
    cin >> N;
    cin >> K;

    vector <char> bowls(N, 'I');

    for (int i = 0; i < K; i++) {
        cin >> start;
        cin >> end;

        for (int j = start; j <= end; j++) {
            bowls[j - 1] = '.';
        }
    }

    for (char i : bowls) {
        cout << i;
    }

    return 0;
}