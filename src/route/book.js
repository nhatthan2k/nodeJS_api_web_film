const router = require('express').Router()
const bookController = require('../app/controller/bookcontroller')

router.get('/', bookController.getAllBook)
router.get('/:id', bookController.getABook)
router.post('/', bookController.addBook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router 