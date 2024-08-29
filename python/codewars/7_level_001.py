def is_same_language(lst):
    langs = sorted([user['language'] for user in lst])
    return True if langs[0] == langs[-1] else False


list1 = [
    {'firstName': 'Daniel', 'lastName': 'J.', 'country': 'Aruba', 'continent': 'Americas', 'age': 42,
     'language': 'JavaScript'},
    {'firstName': 'Kseniya', 'lastName': 'T.', 'country': 'Belarus', 'continent': 'Europe', 'age': 22,
     'language': 'JavaScript'},
    {'firstName': 'Hanna', 'lastName': 'L.', 'country': 'Hungary', 'continent': 'Europe', 'age': 65,
     'language': 'JavaScript'},
]

print(is_same_language(list1))
