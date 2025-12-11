# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

***15*** will be logged to the console because `playlist2` is referencing the same object as `playlist1`. In JavaScript, objects are stored by reference, not by value. That means when you assign `playlist2 = playlist1`, both variables point to the same object in memory. So when `playlist2.songCount` is changed to 15, it also updates `playlist1.songCount`.

To make sure changing `playlist2.songCount` does not affect `playlist1.songCount`, you need to create a copy of the object rather than referencing the same one. That way, each playlist has its own separate data.

**Corrected Code:**

```js
// fix this!
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true }
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

1. If I needed to get an array containing only students who scored above 85. I would use: `.filter()`

2. If I needed to find the student named "Destiny" and update their grade to 90. I would use: `.find()`

3. If I needed to calculate the average grade of all students. I would use: `.reduce()`

4. If I needed to create an array of strings in the format: "Maya: 92". I would use: `.map()`

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ['a', 'b', 'c', 'd'];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

The error happens because `capitalize()` is being called immediately instead of being passed as a function to `.map`. Since it’s called with no argument, str becomes undefined, and the program tries to run `toUpperCase()` on something that doesn’t exist. To fix it, I just need to remove the parentheses and write `letters.map(capitalize)`. A good way to avoid this in the future is to remember that `.map`, `.filter`, and `.find` expect a function reference, not a function call.


---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 }
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs? 


- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?


- Part C: Walk through what happens in the FIRST iteration of reduce:
    - What is the value of sum?
    - What is the value of order?
    - What gets returned?

### Response 4
Part A: 

The `grandTotal` will be 135.

Part B:

The ***0*** at the end is the initial value for sum. It’s important because it tells reduce where to start the total so the math is accurate. Without it, JavaScript would try to use the first object as the starting value, which can lead to errors or unexpected results.

Part C:

In the first iteration, sum starts at ***0*** (because of the initial value). The order is the first object in the array: `{ id: 1, total: 45 }`. The function returns ***0 + 45***, which becomes ***45***, and that value is carried into the next iteration.
