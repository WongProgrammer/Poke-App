import express from 'express';
import bodyParser from 'body-parser';
import sql from 'mssql';
import cors from 'cors';

//initialize
const app = express();
const PORT = 5000;

const config = {
    user: 'francis',
    password: 'francis',
    server: 'BLD\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
    database: 'PokemonDatabase',
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello Pokemon")
});

app.get('/api/v1/pokemon', (req, res) => {
    var dbConn = new sql.ConnectionPool(config);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("select * from pokemon").then(function (resp) {
            let result = resp.recordset
            res.send(result);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});

app.post('/api/v1/pokemon/', (req, res) => {
    /*
    var dbConn = new sql.ConnectionPool(config);
    dbConn.connect().then(function () {
        var request = new sql.Request(dbConn);
        request.query("select * from pokemon").then(function (resp) {
            console.log(resp.recordset);
            dbConn.close();
        }).catch(function (err) {
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
    */
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));