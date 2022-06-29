//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Return the running sum of nums.

class Solution {
    public int[] runningSum(int[] nums) {
        
        int runningSum = 0;
        
        for (int i = 1; i < nums.length; i++) {
            runningSum = nums[i] + nums[i-1];
            nums[i] = runningSum;
        }
        return nums;
    }
}
