const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// const part1 = nums.slice(2, 7)
const removed = nums.splice(2, 5, 77)
// console.log(removed);
// console.log(nums);
const together = nums.join(',')
console.log(together)