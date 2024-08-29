#include <iostream>
#include <string>
#include <map>

using namespace std;

int main() {
    map <string, string> dict;
    string key, value, value_to_find;
    int n;

    cin >> n;

    for (int i = 0; i < n; i++) {
        cin >> key >> value;

        dict[key] = value;
        dict[value] = key;
    }

    cin >> value_to_find;

    cout << dict[value_to_find];

    return 0;
}