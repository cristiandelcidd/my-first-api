import mongoose from 'mongoose';

(
    async () => {
        const db = await mongoose.connect( 'mongodb://localhost:27017/my-first-api',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log( 'Database is connected:', db.connection.name );
    }
)();