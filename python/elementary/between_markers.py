def between_markers(text: str, begin: str, end: str) -> str:
    """
        returns substring between two given markers
    """
    # your code here
    begin_index = text.find(begin) + 1
    end_index = text.find(end)
    return text[begin_index:end_index]


print(between_markers('What is >apple<', '>', '<') == "apple")
print(between_markers('What is [apple]', '[', ']') == "apple")
print(between_markers('What is ><', '>', '<') == "")
print(between_markers('>apple<', '>', '<') == "apple")
