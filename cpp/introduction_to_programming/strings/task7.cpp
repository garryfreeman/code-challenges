#include <iostream>
#include <string>

using namespace std;

const char DOT_CHAR = '.';
const char ZERO_CHAR = '0';
const char NINE_CHAR = '9';

bool check_ip_address(const string& ip) {
    // checking length, first and last char
    if (ip.size() < 7 || ip.size() > 15 || ip.front() == DOT_CHAR || ip.back() == DOT_CHAR) {
        return false;
    }

    int parts_count = 0;
    int dots_count = 0;
    char prev_char;
    char current_char;
    string current_part;

    for (int i = 0; i <= ip.size(); i++) {
        prev_char = i ? ip[i - 1] : DOT_CHAR;
        current_char = i < ip.size() ? ip[i] : DOT_CHAR;

        // checking chars
        if (current_char != DOT_CHAR && (current_char < ZERO_CHAR || current_char > NINE_CHAR)) {
            return false;
        }

        if (current_char != DOT_CHAR) {
            if (!current_part.empty() && current_part[0] == ZERO_CHAR) {
                return false;
            }

            current_part.push_back(current_char);
            continue;
        }

        if (prev_char == DOT_CHAR || ++dots_count > 4 || ++parts_count > 4 || stoi(current_part) > 255) {
            return false;
        }

        current_part = "";
    }

    if (dots_count != 4 || parts_count != 4) {
        return false;
    }

    return true;
}

int main() {
    string ip;
    getline(cin, ip);

    cout << (check_ip_address(ip) ? "YES" : "NO");

    return 0;
}
