
# Is this a triangle?

# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

# (In this case, all triangles must have surface greater than 0 to be accepted).

# if any each to sides is greater than the other then its a triangle
    
def is_triangle(a,b,c)
    # your code
   arr = []
   a + b > c ? arr.push(true) : arr.push(false)
   b + c > a ? arr.push(true) : arr.push(false)
   a + c > b ? arr.push(true) : arr.push(false)
   arr.all? { |el| el == true}  
   
end

p is_triangle(7,2,2)