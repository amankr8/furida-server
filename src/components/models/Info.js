const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    sub_heading: {
        type: String,
        required: true
    }
})

const Info = mongoose.model('Info', infoSchema)

module.exports = Info