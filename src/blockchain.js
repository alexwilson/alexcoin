const { Block } = require('./block')

class Blockchain {

    constructor(initialBlockData = {}) {
        this.chain = [new Block(initialBlockData)]
    }

    /**
     * @returns {Boolean}
     * 
     * @flow
     */
    get valid() {
        return this.chain.slice(1).reduce((isChainValid, currentBlock, previousIndex) => (

            // The chain is still valid so far, and the current block's previous hash matches the hash in the last block.
            isChainValid !== false && currentBlock.previousHash === this.chain[previousIndex].hash

        ), true)
    }

    /**
     * @returns Block
     * 
     * @flow
     */
    get latestBlock() {
        return this.chain[this.chain.length - 1]
    }

    /**
     * @param {Block} newBlock 
     * @returns {void}
     * 
     * @flow
     */
    add(newBlock) {
        newBlock.previousHash = this.latestBlock.hash
        this.chain.push(newBlock)
    }
}

module.exports = { Blockchain, default: Blockchain }