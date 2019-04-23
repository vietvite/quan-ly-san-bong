// var mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);
// const mlabURI = 'mongodb://hieudu0ngtrung:duongtrunghieu01@ds034797.mlab.com:34797/quanlysanbong'  
// const dbName = 'quanlysanbong';
// const connectdb = mongoose.connect(mlabURI,{
// 	reconnectTries : Number.MAX_VALUE,
// 	autoReconnect : true,
// 	useNewUrlParser: true
// }, (error) => {
// 	if(error){
// 		console.log("Error " + error);
// 	}else{
// 		console.log("kết nối với server database thành công")
// 	}
// });
// module.exports = connectdb;
// const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);
// const mlabURI = 'mongodb://hieudu0ngtrung:duongtrunghieu01@ds034797.mlab.com:34797/quanlysanbong'


let mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
require('dotenv').config();
const db_url = process.env.DB_LOCALHOST || process.env.DB_mLab_URL;

class Database {
    constructor(){
        this._connect();
    }
    _connect(){
        mongoose.connect( db_url, {
            reconnectTries : Number.MAX_VALUE,
            useNewUrlParser: true
        })
            .then(() => console.log("Database connected!"))
            .catch((err) => console.log("Database connection error: " + err));
    }
}
module.exports = new Database;