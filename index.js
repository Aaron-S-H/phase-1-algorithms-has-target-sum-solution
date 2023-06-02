function hasTargetSum(array, target) {
  const seenNumbers = {};
  for(let i = 0; i < array.length; i++){
    const complement = target - array[i];
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true;
  }
  
  return false
}
// make a function `hasTargetSum` that checks if two numbers fronm the array add up to some target. 
//   For example, if I have an array `[1,2,3,4]` and the target is `6` I should return true because 2 and 4 add to 6.
/* 

  Write the Big O time complexity of your function here
*/
// Runtime: O(n^2)
// Space: O(n)
/* 
  Add your pseudocode here
*/
// create an object to keep track of the numbers we've already seen

// iterate through each number of the array
// for the current number, identify a complement that adds to the target (complement = target - num)
// check if any key on our object is the compliment
// if so return true
// otherwise add that number to object
// if i reach end of array and no compliment is found, return false


/*

  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
