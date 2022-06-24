class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        
        int leftPointer = m - 1;
        int rightPointer = n - 1;
        int counter = m + n - 1;
        
        
        while ( counter >= 0 ) {
            
            if (leftPointer < 0) {
                nums1[counter] = nums2[rightPointer];
                rightPointer--;
                counter--;
                continue;
            }
            
            if (rightPointer < 0) {
                nums1[counter] = nums1[leftPointer];
                leftPointer--;
                counter--;
                continue;
            }
            
            
            if (nums1[leftPointer] > nums2[rightPointer]) {
                nums1[counter] = nums1[leftPointer];
                leftPointer--;
                
            } else {
                nums1[counter] = nums2[rightPointer];
                rightPointer--;
                
            }
            counter--;
        }
        
        
    }
}
