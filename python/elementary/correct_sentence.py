def correct_sentence(text: str) -> str:
    """
        returns a corrected sentence which starts with a capital letter
        and ends with a dot.
    """
    if '.' not in text:
        text += '.'

    return text[0].upper() + text[1:]


print(correct_sentence("greetings, friends") == "Greetings, friends.")
print(correct_sentence("Greetings, friends") == "Greetings, friends.")
print(correct_sentence("Greetings, friends.") == "Greetings, friends.")
print(correct_sentence("hi") == "Hi.")
print(correct_sentence("welcome to New York") == "Welcome to New York.")
