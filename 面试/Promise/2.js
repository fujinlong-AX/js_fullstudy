var missingNumber = function(nums) {
  let n = nums.length, sum = 0;
  for(let i = 0; i < n; i++) {
    sum = sum + i - nums[i]
  } 
  return sum + n 
};

