def narcissistic(value: int):
    str_num = str(value)
    digits = [int(c)**len(str_num) for c in str(value)]
    return True if sum(digits) == value else False
