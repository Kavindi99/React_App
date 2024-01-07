const [productsList] = require('../constants/const');

//import
const Product = require('../model/Product');

const ProductsController ={

    getAllProducts : async function (req, res, next) {
        // res.send(productsList);
        try {
            const productList = await Product.find();
            res.status(200).json(productList)

        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went wrong'});
        }
    },

    saveProducts : async function (req, res, next) {
        try{
            //first part eka req eken ena data catch karaganna eka
            //req body eke ena data catch karanawa
            const productData = req.body;

            //Mongo db wala data save kranna create kiyana method eka use krai
            //req body eken ena data tika product ekata denwa
            // const promise =  Product.create(productData);

            //promise tye nisa await danwa
            //ewita saveProducts ekath async wei
            const product = await Product.create(productData);

            //create una product eka balaganna ahaki
            res.status(200).json(product);

        }catch (err){
            console.error(err);
            res.status(500).json({error : 'Something went wrong'});
        }

    },

    //single product ekak get karanne mehema
    getProduct:async function (req, res, next) {
        try {
            //ena id eka catch karaganne kohomda
            //used req eka  eka params widiyata ei, eken e id eka access karanan ahki
            const productId = req.params.id;

            //id eken find karai id eka wenne catch kargt product id eka
            //pass una id eka 1 nm 1 id eka filter kara gani
            //mongodb wala findbyid ekada thyenwa eth ethkta ganne mongodb hadana id eka eken apita oni
            // me wade karaganna ba
            const product = await Product.find({id: productId});

            res.status(200).json(product)
        }catch (err){
            console.error(err);
            res.status(500).json({error : 'Something went wrong'});
        }


    },

    // updateProduct:function (req, res, next){
    //     try {
    //         const productId = req.params.id;
    //         const productData = req.body;
    //
    //         const updatedProduct = Product.findOneAndUpdate({
    //             id:productId
    //         }, productData,
    //             //update wena eka return krannada epda meke karanna kiyala kynwa
    //             {new:true});
    //
    //         //product eka nthnm proudct eka na kyla 404 error ekak enna additional validation ekak
    //         if (!updatedProduct){
    //             return res.status(404).json({error : 'Product Not Found!'});
    //         }
    //
    //         //updated nm product eka yawanawa
    //         //res.status(200).json(updatedProduct : 'Successfully Updated);
    //         res.status(200).json(updatedProduct);
    //
    //
    //
    //     }catch (err){
    //         console.error(err);
    //         res.status(500).json({error : 'Something went wrong'});
    //     }
    // },

    updateProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const productData = req.body;

            const updatedProduct = await Product.findOneAndUpdate({id: productId}, productData, {new: true}); // updated product eka return true
            if (!updatedProduct) {
                return res.status(404).json({error: 'product not found'});
            }
            res.status(200).json(updatedProduct);

        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({error: "Something went wrong"});
        }
    },

    deleteProduct:async function (req, res, next) {
        try {
            const productId = req.params.id;

            //genna ganna id eken product 1 through delete one
            const result = await Product.deleteOne({id: productId});

            //apu result eke deleted count eka ganna ahki
            if(result.deletedCount == 0){
                return res.status(404).json({error:'Product Not Found!'})
            }

            //delete una eka successfull nam
            res.status(200).json('Product Deleted Successfully')

        }catch (err){
            console.error(err);
            res.status(500).json({error : 'Something went wrong'});
        }
    }
}

module.exports = ProductsController;