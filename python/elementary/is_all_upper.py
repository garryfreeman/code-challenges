import re


def is_all_upper(text: str) -> bool:
    for letter in text:
        if re.search(r'[a-z]', letter):
            return False

    return True


print(is_all_upper('ALL UPPER'))
print(is_all_upper('all lower'))
print(is_all_upper('mixed UPPER and lower'))
print(is_all_upper(''))
print(is_all_upper('     '))
