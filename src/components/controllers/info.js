const Info = require('../models/Info')

exports.createInfo = async (req, res) => {
    try {
        const newInfo = new Info(req.body)
        await newInfo.save()
        res.json(newInfo)
    } catch (err) {
        console.error(err)
    }
}

exports.updateInfo = async (req, res) => {
    try {
        const update = req.body
        const updatedInfo = await Info.findByIdAndUpdate(req.params.id, update, {new: true})
        res.json(updatedInfo)
    } catch (err) {
        console.error(err)
    }
}