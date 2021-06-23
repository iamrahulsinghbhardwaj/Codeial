const fs=require('fs');
const rfs=require('rotating-file-stream');
const path=require('path');

const logDirectory=path.join(__dirname,'../production_logs');
fs.existsSync(logDirectory || fs.mkdirSync(logDirectory));

const accessLogStream=rfs.createStream('access.log',{
    interval:'1d',
    path:logDirectory
})

const development={
    name:'development',
    asset_path:'/assests',
    session_cookie_key:'hello',
    db:'codeial_development',
    smtp:{
        
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'rsiharu@gmail.com', //add the gmail
                pass: 'rahulsinghsiharuismyvillage' //password of mail here
         }
    },
    
    google_client_id:"802212309578-7ikag2lbs4dd7dk7m5671hqinnq3g9ks.apps.googleusercontent.com",
    google_client_secret:"FCO4pcKTk2wrCWNyJcf0FIPU",
    google_call_back_url:"http://localhost:8000/users/auth/google/callback",
    jwt_secret:'codeial',
    morgan:{
        mode:'dev',
        options:{stream: accessLogStream}
    }
}

const production={
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIAL_SESSION_COOKIE_KEY,
    db: process.env.CODEIAL_DB,
    smtp:{
        
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.CODEIAL_GMAIL_USERNAME, //add the gmail
                pass: process.env.CODEIAL_GMAIL_PASSWORD //password of mail here
         }
    },
    google_client_id:process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret:process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_call_back_url:process.env.CODEIAL_GOOGLE_CALLBACK_URL,
    jwt_secret:process.env.CODEIAL_JWT_SECRET,
    morgan:{
        mode:'combined',
        options:{stream: accessLogStream}
    }
}

module.exports=eval(process.env.CODEIAL_ENVIRONMENT)==undefined?development:eval(process.env.CODEIAL_ENVIRONMENT);
