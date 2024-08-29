def end_zeros(num: int) -> int:
    stringified_num = str(num)
    num_length = len(stringified_num)
    i = num_length - 1
    zeros_count = 0

    while i >= 0:
        if stringified_num[i] == '0':
            zeros_count += 1
            i -= 1
        else:
            return zeros_count

    return zeros_count


print(end_zeros(10000))
