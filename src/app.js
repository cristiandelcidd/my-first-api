import express from 'express';
const app = express();

import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import * as Routes from './routes/';

app.get( '/', ( req, res ) => {
    res.send( 'Hola Mundo' )
})

app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );

app.use( morgan('dev') );
app.use( cors() );
app.use( helmet() );

app.use( '/user', Routes.userRoutes );
app.use( '/product', Routes.productRoutes );
app.use( '/category', Routes.categoryRoutes );

export default app;