const mongoose = require('mongoose');
module.exports = ()=>{
    const connectionParams ={
        useNewUrlParser:true,
     //   useUnifiedTopoly:true
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log('connected to db');
    } catch (error) {
        console.log(error);
        console.log('couldnt connect to db');
    }
};