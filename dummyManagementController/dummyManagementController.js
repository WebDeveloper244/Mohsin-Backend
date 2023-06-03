const productController = async (req, res)=>{
    try {
        const {clientName} = req.body
        res.json({
            message:clientName
        })
        console.log(clientName);
        
    } catch (error) {
        res.json({
            message:error
        })
    }
}

module.exports = {
    productController
}

