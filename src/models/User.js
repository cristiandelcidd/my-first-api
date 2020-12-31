import { Schema, model } from 'mongoose';

import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.hashPassword = async ( password ) => {
    const salt = await bcrypt.genSalt( 10 )
    return await bcrypt.hash( password, salt );
}

userSchema.methods.hidePassword = () => {

}

export default model( 'User', userSchema );