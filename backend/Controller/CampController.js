const mongoose=require('mongoose');
const multer=require('multer');
const Camp=mongoose.model('Camp');
const upload=multer({dist:'uploads/'});

module.exports.inser=upload.single('image'),(req,res,next)=>{

    var camp=new Camp({
        name:req.body.name,
        Description:req.body.Description,
        requirement:req.body.requirement,
        lastdate:req.body.lastdate,
        image:req.file.path

    });
    camp.save().then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created product successfully",
          createdProduct: {
              name: result.name,
             
              
             
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });



}