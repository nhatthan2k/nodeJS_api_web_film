const router = require('express').Router()
const authorController = require('../app/controller/authorcontroller')

router.post('/', authorController.addAuthor)
router.get('/', authorController.getAllAuthor)
router.get('/:id', authorController.getAnAuthor)
router.put('/:id', authorController.updateAuthor)
router.delete('/:id', authorController.deleteAuthor)

module.exports = router