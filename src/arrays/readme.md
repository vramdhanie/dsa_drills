# Array Problems

## Find the missing number from 1 to 100

Given an array of length n-1 containing all the integers from 1 to n with one number missing, find the missing number. The array is not necessarily sorted.

For example, given the array: `[2, 5, 1, 4]` you would say that the number `3` was missing.

Implement two different algorithms for solving this problem.

1. Brute force
   Use a loop to consider every possible integer from 1 to n and check if that integer exist in the array or not.
2. Sum and subtract
   Find the expected sum of all integers from 1 to n. Then find the actual sum of the numbers in the array. The difference is the missing number.

## Find largest and smallest

Given an unsorted array of numbers find the largest and smallest numbers in the array. For example, given the array `[8, 3, 7, 9, 4, 1, 2, 5, 6]` your function should return an array with two values like this: `[1, 9]`. If the given array is empty return the empty array `[]`.

Keep in mind that numbers in the array may also be negative.

Implement two different algorithms to solve this problem.

1. Using sort
   Start by sorting the array using the built in array `sort()` method then simply return the first and last elements of the array.
2. Using iteration
   Iterate over the entire array and track the smallest and largest numbers found so far.
