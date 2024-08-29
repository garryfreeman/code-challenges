def beginning_zeros(number: str) -> int:
    zeros_count = 0

    for num in number:
        if num != '0':
            return zeros_count
        else:
            zeros_count += 1

    return zeros_count


print(beginning_zeros('100') == 0)
print(beginning_zeros('001') == 2)
print(beginning_zeros('100100') == 0)
print(beginning_zeros('001001') == 2)
print(beginning_zeros('012345679') == 1)
print(beginning_zeros('0000') == 4)
