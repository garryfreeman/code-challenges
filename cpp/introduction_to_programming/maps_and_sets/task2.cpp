#include <iostream>
#include <set>

using namespace std;

int main() {
    set <int> s;
    int n, num;
    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> num;

        if (s.find(num) == s.end()) {
            cout << "NO" << endl;
        } else {
            cout << "YES" << endl;
        }

        s.insert(num);
    }

    return 0;
}