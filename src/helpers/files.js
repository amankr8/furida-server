var fs = require('fs')
var path = require('path')

exports.deleteFile = async (filename) => {
    try {
        await fs.unlinkSync(path.join('public/uploads', filename))
        console.log('Associated file deleted!')
    } catch (err) {
        console.error(err)
    }
}

exports.deleteFiles = async () => {
    try {
        const files = await fs.readdirSync('public/uploads')
        for(const file of files) {
            await fs.unlinkSync(path.join('public/uploads', file))
        }
        console.log('All associated images deleted!')
    } catch (err) {
        console.error(err)
    }
}