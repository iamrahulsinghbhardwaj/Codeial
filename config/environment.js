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
    jwt_secret:'codeial'
}

const production={
    name:'production',
    asset_path:process.env.ASSET_PATH,
    session_cookie_key:'aeqLsa2xndqIGnsMwemBH2NUjA6mXrLi',
    db:'codeial_production ',
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
    google_call_back_url:"http://codeial.com/users/auth/google/callback",
    jwt_secret:'jRtMNaOPOsIEXegTbOdeonmaLcGiTgp8'
}

module.exports=development;