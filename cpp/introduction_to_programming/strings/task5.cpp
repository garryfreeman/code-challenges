#include <iostream>
#include <string>

using namespace std;

bool isPalindrome(const string& text) {
    int left = 0;
    int right = text.size() - 1;

    while (left <= right) {
        if (text[left] != text[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

int main() {
    string text;
    getline(cin, text);

    if (isPalindrome(text)) {
        cout << "yes";
    } else {
        cout << "no";
    }

    return 0;
}