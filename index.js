const express=require('express');
const cookieParser=require('cookie-Parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

//used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const passportJWT=require('./config/passport-jwt-strategy');
const passportGoogle=require('./config/passport-google-oauth-strategy');

const { pass } = require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware');
//const MongoStore = require('connect-mongo').session();//MongoDB session store for Connect and Express 

const flash=require('connect-flash');
const customMware=require('./config/middleware');

app.use(sassMiddleware({
    src:'./assests/scss',
    dest:'./assests/css', //destination
    debug:true,  //show erros
    outputStyle:'extended',
    prefix:'/css'
}));

app.use(express.urlencoded({extended: true})); 

app.use(cookieParser());


app.use(express.static('./assests'));
//make the upload path availabe to the browser
app.use('/uploads',express.static(__dirname +'/uploads'));


app.use(expressLayouts);
//extract style and scripts from sub pages into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100) //time after which cookie expires
     }
    // store: MongoStore.create(
    //     {
    //         mongooseConnection: db,
    //         autoRemove: 'disabled'
        
    //     },
    //     function(err){
    //         console.log(err ||  'connect-mongodb setup ok');
    //     }
    //)
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`server is running port: ${port}`);
});
