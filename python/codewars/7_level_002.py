def small_enough(array, limit):
    return False if len([i for i in array if i > limit]) else True
