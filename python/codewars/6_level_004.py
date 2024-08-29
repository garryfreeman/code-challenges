def tribonacci(s: list, n):
    for i in range(2, n):
        s.append(s[i] + s[i - 1] + s[i - 2])
    return s[:n]


print(tribonacci([1, 1, 1], 0))
