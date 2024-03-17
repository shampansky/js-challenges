function twoSum(nums, target) {
    let firstIndex = null;
    const secondIndex = nums.findIndex((num, index) => {
        const compliment = target - num;
        const complimentIndex = nums.findIndex((num, indexComp) => {
            return num === compliment && index !== indexComp
        });
        if (complimentIndex < 0) {
            return false;
        }
        firstIndex = complimentIndex;
        return true;
    });
    return [firstIndex, secondIndex];
}

module.exports = twoSum;
