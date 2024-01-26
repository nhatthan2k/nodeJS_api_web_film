const {Book, Author} = require('../model/Movies')

const bookController = { 
    // [POST] /v1/book
    addBook: async(req, res) => {
        try{
            const newbook = new Book(req.body)
            const savebook = await newbook.save()
            if (req.body.author){ 
                const author = Author.findById(req.body.author)
                await author.updateOne({$push:{books: savebook._id}})
            }
            res.status(200).json(savebook)
        }
        catch(err) {
            res.status(500).json(err)
        }
    },

    // [GET] /v1/book
    getAllBook: async (req, res) => {
        try{
            const allbook = await Book.find()
            res.status(200).json(allbook)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    // [GET] /v1/book
    getABook: async (req, res) => {
        try{
            const aBook = await Book.findById(req.params.id).populate("author")
            res.status(200).json(aBook)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    // [PUT] /v1/book/:id
    updateBook: async (req, res) => {
        try{
            const book = await Book.findById(req.params.id)
            await book.updateOne({$set: req.body})
            res.status(200).json('update successfully')
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    // [DELETE] /v1/book/:id
    deleteBook: async (req, res) => {
        try{
            await Author.updateMany({books: req.params.id}, {$pull : {books: req.params.id}})
            await Book.findByIdAndDelete(req.params.id)
            res.status(200).json('delete successfully')
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = bookController