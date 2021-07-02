const removeAnyDuplicates = (string) =>  {
    // store the string without duplicates
    let stack = []
    // iterate over the inputted string
    for (let i = 0; i < string.length; i ++) {
        // check whether the element of the string
        // is equal to the last element of the stack
        if (string[i] === stack[stack.length - 1]) {
            // if correct remove the last element of stack
            stack.pop()
        }else {
            // if incorrect put the element on the stack
            stack.push(string[i])
        }
    }
    return stack.join("")
}
export default removeAnyDuplicates;