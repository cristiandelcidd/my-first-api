import User from '../models/User';

export const signUp = async ( req, res ) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User( { username, email, password: await User.hashPassword( password ) } );
        const userSaved = await newUser.save();
        return res.status( 201 ).json({
            ok: true,
            user: userSaved
        })
    } catch (error) {
        res.status( 401 ).json({
            ok: false,
            error
        })
    }
}

export const signIn = async ( req, res ) => {
    const users = await User.find({});
    res.json({
        ok: true,
        users
    });
}