const nums = [1,2,3,4,-9,6,7,-6,9]
for(let i = 0; i < nums.length; i++){
    if (nums[i]<0){
        continue;
    }
    // if (nums[i]>4) {
    //     break;
    // }
    console.log(nums[i])
}
