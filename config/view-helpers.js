const env=require('./environment');
const fs=require('fs');
const path=require('path');

module.exports=(app)=>{
    app.locals.assestPath=function(filePath){
        if(env.name=='development'){
            return filePath;
        }

        return '/'+JSON.parse(fs.readFileSync(path.join(__dirname,'../public/assets/rev-menifest.json')))[filePath];

    }
}