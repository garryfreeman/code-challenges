#include <iostream>
#include <set>

using namespace std;

int main() {
    set <int> s1, s2;
    int n, num;

    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> num;
        s1.insert(num);
    }

    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> num;
        s2.insert(num);
    }

    for (int current : s1) {
        if (s2.find(current) != s2.end()) {
            cout << current << ' ';
        }
    }

    return 0;
}