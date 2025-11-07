const multer = require('multer')
const path = require('path')
const fs = require('fs')

const uploadDir = path.join(__dirname, '../uploads')
if(!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

const storage = multer.diskStorage({
  destination: (req,file,cb)=> cb(null, uploadDir),
  filename: (req,file,cb)=> {
    const unique = Date.now() + '-' + Math.round(Math.random()*1e9)
    const ext = path.extname(file.originalname)
    cb(null, `${unique}${ext}`)
  }
})
const upload = multer({ storage })

// POST /api/tryon
exports.tryOnHandler = [
  upload.single('user'),
  async (req, res) => {
    if(!req.file) return res.status(400).json({ error: 'No user image' })
    // Placeholder: in production call AI try-on service here.
    const resultUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    return res.json({ resultUrl })
  }
]
