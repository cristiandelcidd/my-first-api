import Product from '../models/Product';

export const createProduct = async ( req, res ) => {
    try {
        const { name, category, price } = req.body;
        const newProduct = new Product({ name, category, price });
        const productSaved = await newProduct.save()
        res.status( 201 ).json({
            ok: true,
            product: productSaved
        })
    } catch (error) {
        res.status( 400 ).json({
            ok: false,
            error
        })
    }
}

export const getProducts = async ( req, res ) => {

}

export const getProductById = async ( req, res ) => {

}

export const updateProduct = async ( req, res ) => {

}

export const deleteProduct = async ( req, res ) => {

}