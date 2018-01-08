const { Blockchain } = require('./blockchain')
const { Block } = require('./block')

const alexCoin = new Blockchain()
alexCoin.add(new Block ({ amount: 2 }))
alexCoin.add(new Block({ amount: 8 }))
alexCoin.add(new Block({ amount: 8 }))
alexCoin.add(new Block({ amount: 8 }))
alexCoin.add(new Block({ amount: 8 }))

module.exports = { Block, Blockchain }
