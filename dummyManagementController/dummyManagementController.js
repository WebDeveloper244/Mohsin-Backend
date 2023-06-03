const productController = async (req, res)=>{
    try {
        console.log(req);
       
        
    } catch (error) {
        res.json({
            message:error
        })
    }
}

module.exports = {
    productController
}

