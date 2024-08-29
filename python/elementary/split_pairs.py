def split_pairs(a):
    result = []
    i = 0
    if len(a) % 2:
        a += '_'

    while i < len(a):
        result.append(a[i:i + 2])
        i += 2

    return result


print(split_pairs('abcd') == ['ab', 'cd'])
print(split_pairs('abc') == ['ab', 'c_'])
print(split_pairs('abcdf') == ['ab', 'cd', 'f_'])
print(split_pairs('a') == ['a_'])
print(split_pairs('') == [])
