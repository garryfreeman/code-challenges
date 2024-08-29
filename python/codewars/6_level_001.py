def to_camel_case(text):
    result = ''
    text = list(text)
    for i in range(len(text)):
        if text[i] in ['-', '_']:
            text[i+1] = text[i+1].upper()
        else:
            result += text[i]

    return result

print(to_camel_case('the_stealth_warrior'))
