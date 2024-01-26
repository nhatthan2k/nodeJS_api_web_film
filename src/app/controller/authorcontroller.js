const { Book , Author } = require("../model/Movies")

const authorController = {
    // [POST] /v1/author
    addAuthor: async (req, res) => {
        try{
            const newauthor = new Author(req.body)
            const saveauthor = await newauthor.save()
            res.status(200).json(saveauthor)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    // [GET] /v1/author
    getAllAuthor: async (req, res) => {
        try{
            const allauthor = await Author.find()
            res.status(200).json(allauthor)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    // [GET] /v1/author/:id
    getAnAuthor: async (req, res) => {
        try{
            const anAuthor = await Author.findById(req.params.id).populate("books")
            res.status(200).json(anAuthor)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    // [PUT] /v1/author/:id
    updateAuthor: async (req, res) => {
        try{
            const author = await Author.findById(req.params.id)
            await author.updateOne({$set: req.body})
            res.status(200).json('update successfully')
        }
        catch ( err ){
            res.status(500).json(err)
        }
    },

    // [DELETE] /v1/author/:id
    deleteAuthor: async (req, res) => {
        try{
            await Book.updateMany({author: req.params.id}, {author: null})
            await Author.findByIdAndDelete(req.params.id)
            res.status(200).json('delete successfully')
        }
        catch ( err ){
            res.status(500).json(err)
        }
    }
}

module.exports = authorController