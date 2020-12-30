import Category from '../models/Category';

export const createCategory = async ( req, res ) => {
    try {
        const { name, description } = req.body;
        const newCategory = new Category( { name, description } )
        const categorySaved = await newCategory.save();
        res.status( 201 ).json({
            ok: true,
            category: categorySaved
        })
    } catch (error) {
        res.status( 400 ).json({
            ok: false,
            error
        })
    }
}

export const updateCategoryById = async ( req, res ) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const user = await Category.findByIdAndUpdate( id, { name, description }, { new: true } );
    res.status( 201 ).json({
        ok: true,
        userUpdated: user
    })
}