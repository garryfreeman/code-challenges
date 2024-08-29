#include <iostream>

using namespace std;

int main() {
    int A, B, C;
    cin >> A >> B >> C;

    if (A == B && B == C) {
        cout << 3;
    } else if (A == B || B == C || C == A) {
        cout << 2;
    } else {
        cout << 0;
    }

    return 0;
}

//int main() {
//    int result = 0;
//    int A, B, C;
//    cin >> A >> B >> C;
//
//    if (A == B || A == C) {
//        result++;
//    }
//
//    if (B == A || B == C) {
//        result++;
//    }
//
//    if (C == A || C == B) {
//        result++;
//    }
//
//    cout << result;
//
//    return 0;
//}