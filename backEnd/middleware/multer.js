import multer from "multer"; 
const storage=multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname )
    }
})

// create intance of multer storage\
  const upload= multer({storage})

  export default upload;