def nearest_value(values: set, one: int) -> int:
    if one in values:
        return one
    else:
        current_value = float('inf')
        values_list = list(values)
        values_list.sort()
        for value in values_list:
            if abs(one - value) == 1:
                return value
            if abs(one - current_value) > abs(one - value):
                current_value = value

        return current_value


print(nearest_value({4, 7, 10, 11, 12, 17}, 9) == 10)
print(nearest_value({4, 7, 10, 11, 12, 17}, 8) == 7)
print(nearest_value({4, 8, 10, 11, 12, 17}, 9) == 8)
print(nearest_value({4, 9, 10, 11, 12, 17}, 9) == 9)
print(nearest_value({4, 7, 10, 11, 12, 17}, 0) == 4)
print(nearest_value({4, 7, 10, 11, 12, 17}, 100) == 17)
print(nearest_value({5, 10, 8, 12, 89, 100}, 7) == 8)
print(nearest_value({-1, 2, 3}, 0) == -1)
