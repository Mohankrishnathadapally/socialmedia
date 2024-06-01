import java.util.HashSet;

public class TwoElementsSum {
    
    // Method to check if there are two elements in the array that add up to x
    public static String hasPairWithSum(int[] arr, int x) {
        HashSet<Integer> seen = new HashSet<>();  // HashSet to keep track of the elements we have seen so far
        
        for (int num : arr) {  // Iterate over each element in the array
            if (seen.contains(x - num)) return "Yes";  // If the complement (x - num) is in the set, we have found a pair
            seen.add(num);  // Add the current element to the set
        }
        
        return "No";  // If no such pair is found, return "No"
    }

    public static void main(String[] args) {
        System.out.println(hasPairWithSum(new int[]{0, -1, 2, -3, 1}, -2));  // Output: Yes
        System.out.println(hasPairWithSum(new int[]{1, -2, 1, 0, 5}, 0));  // Output: No
    }
}
