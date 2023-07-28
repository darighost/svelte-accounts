def fib(n):
    a = 0
    b = 1

    for i in range(n+1):
        old_a = a
        a = b
        b = old_a + b
    
    return old_a

print(fib(7))
