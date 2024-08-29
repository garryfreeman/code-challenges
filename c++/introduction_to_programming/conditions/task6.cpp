#include <iostream>

using namespace std;

int main() {
    int const SECONDS_IN_MINUTE = 60;
    int const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
    int const HOURS_IN_DAY = 24;

    int h1, m1, s1, h2, m2, s2;
    cin >> h1 >> m1 >> s1 >> h2 >> m2 >> s2;

    int time_in_secs1 = h1 * SECONDS_IN_HOUR + m1 * SECONDS_IN_MINUTE + s1;
    int time_in_secs2 = h2 * SECONDS_IN_HOUR + m2 * SECONDS_IN_MINUTE + s2;

    cout << time_in_secs2 - time_in_secs1;

    return 0;
}