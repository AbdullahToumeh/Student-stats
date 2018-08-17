class StudentStats {
    constructor(jsonPath) {
        this.data = require(jsonPath)
    }
}

module.exports = StudentStats