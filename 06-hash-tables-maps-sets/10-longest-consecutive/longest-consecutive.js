function longestConsecutiveSequence(nums) {
    const numSet = new Set(nums.sort((a, b) => a - b))
    let maxSequence = 0
    let counter = 1

    for (const num of numSet) {
        if (numSet.has(num + 1)) {
            counter++
            if (counter > maxSequence) {
                maxSequence = counter
            }
        } else {
            counter = 1
        }
    }
    return maxSequence
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]))

module.exports = longestConsecutiveSequence;
