#include <iostream>
#include <string>

using namespace std;

int countWords(string text) {
    int count = 0;

    for (int i = 0; i < text.size(); i++) {
        if (text[i] != ' ' && (i - 1 < 0 || text[i - 1] == ' ')) {
            count++;
        }
    }

    return count;
}

int main() {
    string text;
    getline(cin, text);

    cout << countWords(text);

    return 0;
}