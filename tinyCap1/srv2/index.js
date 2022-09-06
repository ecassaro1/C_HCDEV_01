const express = require('express')
const app = express()


const getEnv = async ()=>{
    var xsenv = require('@sap/xsenv');

    xsenv.loadEnv();
    let srv = xsenv.readServices();
    return srv;
}

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/Ent1', async function (req, res) {
    let rows = await getEnt1();
    res.send(rows);
})

const getEnt1 = async ()=>{
    var hana = require('@sap/hana-client');

    let vcap_services = await getEnv();

    let credentials = vcap_services['tinyCap1-db'].credentials;

    var connOptions = {
        serverNode: credentials.host+":"+credentials.port,
        encrypt: 'true',
        sslValidateCertificate: 'false',
        uid: credentials.user,
        pwd: credentials.password
    };
    
    var connection = await hana.createConnection();

    connection.connect(connOptions);

    var sql = 'SELECT * FROM "463D2E3D2BB44D398D0A9154A46B7F95"."TINYCAP1_ENT1"';

    var rows = await connection.exec(sql);

    return rows;
}

app.listen(8080)