const Product = require("../models/product.model");


module.exports.findAllProducts = (req, res)=>{
    Product.find()
        .then(allProduct=>{
            res.json({results: allProduct})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.createNewProduct = (req, res)=>{
    Product.create(req.body)
        .then(newProductObj=>{
            res.json({results: newProductObj})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneProduct = (req,res)=>{
    // console.log("trying to find one Product")
    // console.log(req.params)
    Product.findOne({_id:req.params.id})
        .then(foundProduct=>{
            res.json({results: foundProduct})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateExistingProduct = (req, res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json({results: updatedProduct}))
        .catch(err => { 
            res.json({err:err})
        })
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => res.json({ result: deletedProduct }))
        .catch(err => { 
            res.json({err:err})
        })
}
