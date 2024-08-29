#include <iostream>

int main() {
    int const SECONDS_IN_MINUTE = 60;
    int const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
    int const HOURS_IN_DAY = 24;

    int time;
    std::cin >> time;

    int hours = time / SECONDS_IN_HOUR;
    int minutes = time % SECONDS_IN_HOUR / SECONDS_IN_MINUTE;
    int seconds = time % SECONDS_IN_HOUR % SECONDS_IN_MINUTE;

    std::cout << hours % HOURS_IN_DAY <<  ":";
    std::cout << minutes / 10 << minutes % 10 << ":";
    std::cout << seconds / 10 << seconds % 10;

    return 0;
}