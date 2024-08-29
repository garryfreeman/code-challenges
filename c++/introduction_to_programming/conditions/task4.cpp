#include <iostream>

int main() {
    int a, b, n;
    std::cin >> a >> b >> n;

    int rub = a * n + (b * n / 100);
    int kop = b * n % 100;

    std::cout << rub << " " << kop;

    return 0;
}