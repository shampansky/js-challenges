function wordInstanceCounter(str, word) {
    return str.toLowerCase().split(word).length - 1
}

module.exports = wordInstanceCounter;
