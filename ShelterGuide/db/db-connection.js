const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose'); 

const connectDatabase = () => {
        mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database with host: ${con.connection.host}`);
    }).catch(err => {
        console.log(err);
    })
}


module.exports = connectDatabase;

// const mysql2 = require('mysql2');

// class DBConnection {
//     constructor() {
//         this.db = mysql2.createPool({
//             host: 'db-mysql-nyc3-32982-do-user-9122779-0.b.db.ondigitalocean.com',
//             user: process.env.DB_USER,
//             password: process.env.DB_PASS,
//             database: process.env.DB_DATABASE,
//             port: process.env.DB_PORT
//         });

//         this.checkConnection();
//     }

//     checkConnection() {
//         this.db.getConnection((err, connection) => {
//             if (err) {
//                 if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//                     console.error('Database connection was closed.');
//                 }
//                 if (err.code === 'ER_CON_COUNT_ERROR') {
//                     console.error('Database has too many connections.');
//                 }
//                 if (err.code === 'ECONNREFUSED') {
//                     console.error('Database connection was refused.');
//                 }
//             }
//             if (connection) {
//                 connection.release();
//             }
//             return
//         });
//     }

//     query = async (sql, values) => {
//         return new Promise((resolve, reject) => {
//             const callback = (error, result) => {
//                 if (error) {
//                     reject(error);
//                     return;
//                 }
//                 resolve(result);
//             }
//             // execute will internally call prepare and query
//             this.db.execute(sql, values, callback);
//         }).catch(err => {
//             const mysqlErrorList = Object.keys(HttpStatusCodes);
//             // convert mysql errors which in the mysqlErrorList list to http status code
//             err.status = mysqlErrorList.includes(err.code) ? HttpStatusCodes[err.code] : err.status;

//             throw err;
//         });
//     }
// }

// // like ENUM
// const HttpStatusCodes = Object.freeze({
//     ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
//     ER_DUP_ENTRY: 409
// });


// module.exports = new DBConnection();