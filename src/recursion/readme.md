# Recursion

## Power Calculator

Given two integers `a` and `b` where `b` is not negative then `a` raised to the power `b` is `a` multiplied by itself `b` times. We call `a` the **base** and `b` the **exponent**.

For example, 2 raised to the power 3 is ` 2 * 2 * 2 = 8`. And 3 raised to the power 5 is `3 * 3 * 3 * 3 * 3 = 243`.

Any number raised to the power 0 is 1.

Write a function called `power()` that takes two parameters, an integer as a base, and a non-negative integer as an exponent. The function returns the value of the base raised to the power of the exponent.

If the exponent is negative throw an Error with the message `exponent should be >= 0`.

- `power(10,2)` should return `100`
- `power(10,-2)` throw Error `exponent should be >= 0`

## Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

## Fibonacci

Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. The 0th Fibonacci number is defined as 0 and the 1st Fibonacci number is defined as 1. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 0, 1, 1, 2, 3, 5, 8, 13... .

## Find a way out of the maze

You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

You can use the following mazes to test your program.

```
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
```

The Maze is represented as a N _ M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by `e`. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by _. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

For the above maze, a possible exit path can be `RRDDLLDDRRRRRR`
