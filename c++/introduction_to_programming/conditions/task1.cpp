#include <iostream>

int main() {
    int num;
    std::cin >> num;

    int first = num / 100;
    int second = num % 100 / 10;
    int third = num % 10;

    std::cout << first + second + third;

    return 0;
}
