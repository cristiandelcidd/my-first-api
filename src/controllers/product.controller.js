import Product from '../models/Product';

export const createProduct = async ( req, res ) => {
    try {
        const { name, category, price, user } = req.body;
        const newProduct = new Product({ name, category, price, user });
        const productSaved = await newProduct.save()
        res.status( 201 ).json({
            ok: true,
            product: productSaved
        })
    } catch (error) {
        res.status( 400 ).json( { ok: false, error } )
    }
}

export const getProducts = async ( req, res ) => {
    try {
        const products = await Product.find({})
            .populate( 'category', 'name' )
            .populate( 'user', 'username' )
        res.status( 201 ).json({
            ok: true,
            products
        })
    } catch (error) {
        res.status( 400 ).json( { ok: false, error } );
    }
}

export const getProductById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const product = await Product.findById( id )
            .populate( 'category', 'name' )
            .populate( 'user', 'username' )
        res.status( 201 ).json({
            ok: true,
            product
        })
    } catch (error) {
        res.status( 400 ).json( { ok: false, error } )
    }
}

export const updateProduct = async ( req, res ) => {

}

export const deleteProduct = async ( req, res ) => {

}