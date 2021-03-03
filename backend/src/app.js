const express = require('express');
const app = express();

const cors = require("cors");
const flash = require('connect-flash');
const morgan = require('morgan');

const mysql = require('mysql');
const myConnection = require('express-myconnection');


//configuracion
app.set('port', process.env.PORT || 8080 );

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(flash());

//db
/*app.use(myConnection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "tiendavirtual"
},"single"));*/


app.use(require('./db.js'));



//rutas
/*------------------PRODUCTO----------------*/
app.use('/api/', require('./routers/products/product.router'));
app.use('/api/', require('./routers/products/category.router'));
app.use('/api/', require('./routers/users/user.router'));
app.use('/api/', require('./routers/users/localization.router'));
app.use('/api/', require('./routers/users/contact.router'));
app.use('/api/', require('./routers/checkout/payment_method'));
app.use('/api/', require('./routers/checkout/state_checkout'));
app.use('/api/', require('./routers/checkout/checkout'));

//servidor
app.listen(app.get('port'), () => {
    console.log('Server On');
    console.log('in port: ',app.get('port'));
});


