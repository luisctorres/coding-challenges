public class Main {

    public static void main(String[] args) {


                //merging two ordered arrays
                //input will always be numbers. always be in ascending order
                //max length 10
                //one array could be empty

                int[] arr1 = {1, 3, 5, 7};
                int[] arr2 = {2, 4, 5, 6};

                int n = 4;


                int[] result = mergeTwoArrays(arr1, arr2, n);
                System.out.println(Arrays.toString(result));

            }


            public static int[] mergeTwoArrays(int[] array1, int[] array2, int n) {

                if (array1.length == 0) {
                    return array2;
                }

                if (array2.length == 0) {
                    return array1;
                }

                //first we check if one of the arrays is empty by using an if statement

                //will be using 2 pointers to traverse through both arrays and compare arr1[i] to array2[i]
                int leftPointer = 0;
                int rightPointer = 0;


                int maxCount = Math.min(n, array1.length + array2.length);

                int[] result = new int[maxCount];

                int count = 0;


                while (count < maxCount) {

                    if (leftPointer == array1.length) {

                        result[count] = array2[rightPointer];
                        rightPointer++;
                        count++;
                        continue;
                    }

                    if (rightPointer== array2.length) {

                        result[count] = array1[leftPointer];
                        leftPointer++;
                        count++;
                        continue;
                    }



                    if (array1[leftPointer] < array2[rightPointer]) {
                        result[count] = array1[leftPointer];
                        leftPointer++;


                    } else {
                        result[count] = array2[rightPointer];
                        rightPointer++;
                    }
                    count++;

                }

                return result;

            }

        }



