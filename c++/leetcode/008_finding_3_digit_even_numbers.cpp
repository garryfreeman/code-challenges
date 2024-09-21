class Solution {
public:
    vector<int> findEvenNumbers(vector<int>& digits) {
        vector<int> result;
        vector<int> repeats(10, 0);

        for (int digit : digits) {
            repeats[digit]++;
        }


        for (int number = 100; number <= 999; number += 2) {
            int hundreds = number / 100;
            int tens = (number % 100) / 10;
            int ones = number % 10;
            bool correct = true;

            if (--repeats[hundreds] < 0) {
                correct = false;
            }

            if (--repeats[tens] < 0) {
                correct = false;
            }

            if (--repeats[ones] < 0) {
                correct = false;
            }

            if (correct) {
                result.push_back(number);
            }

            repeats[hundreds]++;
            repeats[tens]++;
            repeats[ones]++;
        }

        return result;
    }
};