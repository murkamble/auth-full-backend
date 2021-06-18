const router = require('express').Router()
const uploadImageMiddleware = require('../middleware/uploadImage.middleware')
const uploadController = require('../controllers/upload.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/upload_avatar', uploadImageMiddleware, authMiddleware, uploadController.uploadAvatar)

module.exports = router