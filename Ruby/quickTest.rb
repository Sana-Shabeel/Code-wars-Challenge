def binary_array_to_number(arr)
    # your code here
    
    
    arr.join('').to_i(2)
end 


p binary_array_to_number([1,1,1,1])