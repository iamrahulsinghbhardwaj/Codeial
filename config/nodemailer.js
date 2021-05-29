const nodemailer=require("nodemailer");
const ejs=require('ejs');
const path=require('path');

let transporter=nodemailer.createTransport({
    service:'gmail',
    host:'stmp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'alchemy.cn18',
        pass:'rahulsingh'
    }
});

let renderTemplemate=(data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err){console.log('error in rendring template');return};
            
            mailHTML=template;
        }
    )

    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplemate:renderTemplemate
}