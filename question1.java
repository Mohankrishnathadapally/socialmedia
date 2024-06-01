import java.util.Stack;

public class BalancedBrackets {
    
    // Method to check if the expression is balanced
    public static String isBalanced(String exp) {
        Stack<Character> stack = new Stack<>();  // Stack to keep track of opening brackets

        for (char ch : exp.toCharArray()) {  // Iterate over each character in the expression
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);  // Push opening brackets onto the stack
            } else if (ch == ')' || ch == '}' || ch == ']') {
                if (stack.isEmpty()) return "Not Balanced";  // If stack is empty, brackets are not balanced
                char last = stack.pop();  // Pop the last opening bracket from the stack
                if (!isMatchingPair(last, ch)) return "Not Balanced";  // Check if the popped bracket matches the closing bracket
            }
        }
        
        return stack.isEmpty() ? "Balanced" : "Not Balanced";  // If stack is empty, brackets are balanced
    }

    // Helper method to check if the opening and closing brackets are of the same type
    private static boolean isMatchingPair(char open, char close) {
        return (open == '(' && close == ')') ||
               (open == '{' && close == '}') ||
               (open == '[' && close == ']');
    }

    public static void main(String[] args) {
        System.out.println(isBalanced("[()]{}{[()()]()}"));  // Output: Balanced
        System.out.println(isBalanced("[(])"));  // Output: Not Balanced
    }
}
