def in_array(array1, array2):
    result = []
    for substring in set(array1):
        for string in array2:
            if substring in string:
                result.append(substring)
                break

    return sorted(result)


a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

print(in_array(a1, a2))