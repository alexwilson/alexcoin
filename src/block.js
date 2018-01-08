const { hash } = require('./util/native-hashing')

class Block {

    /**
     * @param {Number} index 
     * @param {Date} timestamp 
     * @param {Object} data 
     * @param {String} previousHash 
     * 
     * @flow
     */
    constructor(data, previousHash = '') {
        this.previousHash = previousHash
        this.timestamp = new Date()
        this.data = data
    }

    /**
     * @flow
     * @returns {String} hash
     */
    get hash() {
        return hash(
            this.previousHash +
            this.timestamp.toISOString() +
            JSON.stringify(this.data)
        )
    }
}

module.exports = { Block, default: Block }