import multer from "multer"
import path from "path"

// configuring the store
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/") //saves file to the upload folder
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueName); // Ensure unique filenames
    }
})

// File filter to allow only images
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isValidExt = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const isValidMime = allowedTypes.test(file.mimetype);
  
    if (isValidExt && isValidMime) {
      cb(null, true); // Accept file
    } else {
      cb(new Error("Only image files are allowed!"), false); // Reject file
    }
  };

const upload = multer({
    storage: storage,
    limits: {fileSize: 5 * 1024 * 1024}, // limit the file size to 5mb
    fileFilter: fileFilter,
})

export default upload