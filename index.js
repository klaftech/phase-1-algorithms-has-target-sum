function hasTargetSum(array, target) {
  // Write your algorithm here
  //array.forEach((a) => checkMatch(array, target, a))
  
  const removeCurrentIterationFromArray = function (nestedArray, iteration) {
    return nestedArray.splice(nestedArray.findIndex((element) => element === iteration), 1) 
  }

  const checkMatch = function (a, b, target) { 
    while(a + b === target){
      //console.log(`true: A=${a}, B=${b}, T=${target}`)
      result = true
      break;
    }
  }
  
  let result = false

  for(const a of array){
    const nestedArray = [...array]
    
    removeCurrentIterationFromArray(nestedArray, a)
    
    nestedArray.forEach((b) => {
      checkMatch(a,b,target)
    })
  }

  if(result){
    //console.log("true")
    return true
  } else {
    //console.log("false")
    return false
  }
}

/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here
  iterate entire function
    in each iteration, iterate again and check for match
  */

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
