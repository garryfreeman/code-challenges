CODE = {'A': '.-',     'B': '-...',   'C': '-.-.',
        'D': '-..',    'E': '.',      'F': '..-.',
        'G': '--.',    'H': '....',   'I': '..',
        'J': '.---',   'K': '-.-',    'L': '.-..',
        'M': '--',     'N': '-.',     'O': '---',
        'P': '.--.',   'Q': '--.-',   'R': '.-.',
        'S': '...',    'T': '-',      'U': '..-',
        'V': '...-',   'W': '.--',    'X': '-..-',
        'Y': '-.--',   'Z': '--..',   'SOS': '...---...',

        '0': '-----',  '1': '.----',  '2': '..---',
        '3': '...--',  '4': '....-',  '5': '.....',
        '6': '-....',  '7': '--...',  '8': '---..',
        '9': '----.'
        }

CODE_REVERSED = {value:key for key,value in CODE.items()}


def decodeMorse(morse_code: str):
    result = ''
    words = morse_code.strip().split('   ')
    for w in words:
        chars = w.split(' ')
        for c in chars:
            result += CODE_REVERSED[c]
        result += ' '
    return result.strip()


print(decodeMorse('...---...'), 'SOS')
