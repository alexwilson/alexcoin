const crypto = require('crypto');

const hashingAlgorithm = 'sha256'

/**
 * @param {String} dataToHash 
 * @returns {String}
 *
 * @flow
 */
const hash = dataToHash => {
    const newHash = crypto.createHash(hashingAlgorithm)
    newHash.update(dataToHash)
    return newHash.digest('hex')
}

module.exports = {
    hash
}