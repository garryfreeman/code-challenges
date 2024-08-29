def format_duration(seconds: int):
    if not seconds:
        return 'now'

    years = seconds // (60 * 60 * 24 * 365)
    seconds %= (60 * 60 * 24 * 365)
    days = seconds // (60 * 60 * 24)
    seconds %= (60 * 60 * 24)
    hours = seconds // (60 * 60)
    seconds %= (60 * 60)
    minutes = seconds // 60
    seconds %= 60
    result = []
    if years:
        result.append(f'{years} {"years" if years > 1 else "year"}')
    if days:
        result.append(f'{days} {"days" if days > 1 else "day"}')
    if hours:
        result.append(f'{hours} {"hours" if hours > 1 else "hour"}')
    if minutes:
        result.append(f'{minutes} {"minutes" if minutes > 1 else "minute"}')
    if seconds:
        result.append(f'{seconds} {"seconds" if seconds > 1 else "second"}')

    if len(result) == 1:
        return ''.join(result)
    elif len(result) == 2:
        return ' and '.join(result)
    elif len(result) > 2:
        return ', '.join(result[0:-1]) + ' and ' + result[-1]


print(format_duration(1), "1 second")
print(format_duration(62), "1 minute and 2 seconds")
print(format_duration(120), "2 minutes")
print(format_duration(3600), "1 hour")
print(format_duration(3662), "1 hour, 1 minute and 2 seconds")