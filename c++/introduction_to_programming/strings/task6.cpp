#include <iostream>
#include <string>

using namespace std;

const char SPACE_CHAR = ' ';

string get_longest_word(const string& str) {
    string longest_word;
    string current_word;
    char current_char;

    for (int i = 0; i <= str.size(); i++) {
        current_char = i < str.size() ? str[i] : SPACE_CHAR;

        if (current_char != SPACE_CHAR) {
            current_word.push_back(current_char);
        } else {
            if (current_word.size() > longest_word.size()) {
                longest_word = current_word;
            }
            current_word = "";
        }
    }


    return longest_word;
}

int main() {
    string str;
    getline(cin, str);

    cout << get_longest_word(str);

    return 0;
}
