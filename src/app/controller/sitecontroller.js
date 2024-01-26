class siteController {
    home(req, res) {
        res.status(200).json('hello')
    }
}

module.exports = new siteController()