const express = require('express')
const router = express.Router()
const { getContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController')
const validateToken = require('../middleware/validateTokenHandler')

router.route('/').get(validateToken, getContacts).post(validateToken, createContact)
router.route('/:id').get(validateToken, getContact).put(validateToken, updateContact).delete(validateToken, deleteContact)

module.exports = router
