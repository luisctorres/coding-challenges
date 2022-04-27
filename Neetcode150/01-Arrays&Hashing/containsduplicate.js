//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



//the basic idea is to create an empty obj, map or set
//we will check if the (current number of nums) exists in the variable
//if it doesnt we add it to the variable
//if the value is a duplicate return true
//otherwise we will return false



//solution
var containsDuplicate = function(nums) {
    
    const numberSet = new Set();
    
    for (let number of nums) {
        
        if (numberSet.has(number)) {
            return true;
        } 
    numberSet.add(number)
    }
    return false;
    
};


