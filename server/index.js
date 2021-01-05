const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shaun_dev',
})

app.get('/', (req, res) => {

    const sqlTestInsertInfo = "INSERT INTO test (id, name) VALUES ('123456789','Shaun the Sheep');"
    db.query(sqlTestInsertInfo, (err, result) => {
        res.send('hello world!');
    });

});


app.listen(3001, () => {
    console.log("running now");
});