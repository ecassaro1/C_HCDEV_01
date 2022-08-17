const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/Ent1', async function (req, res) {
    let rows = await getEnt1();
    res.send(rows);
})
app.get('/Ent1Cred', async function (req, res) {
    let rows = await getEnt1Cred();
    res.send(rows);
})
app.get('/get_ent1_proc', async function (req, res) {
    let rows = await getEnt1Proc();
    res.send(rows);
})
app.get('/getEnv', async function (req, res) {
    let response = await getEnv();
    res.send(response);
})

const getEnv = async ()=>{
    var xsenv = require('@sap/xsenv');

    xsenv.loadEnv();
    let srv = xsenv.readServices();
    //console.log(srv);
    return srv;
}

const getEnt1Cred = async ()=>{
    var hana = require('@sap/hana-client');

    let vcap_services = await getEnv();

    let credentials = vcap_services['tiny1-hdidb'].credentials;

    var connOptions = {
        serverNode: credentials.host+":"+credentials.port,
        encrypt: 'true',
        sslValidateCertificate: 'false',
        uid: credentials.user,
        pwd: credentials.password
    };
    
    var connection = await hana.createConnection();

    connection.connect(connOptions);

    var sql = 'SELECT * FROM TINY1_HDI_DB_1.ENT1';

    var rows = await connection.exec(sql);

    return rows;
}

const getEnt1 = async ()=>{
    //return [ { ID: 1, NAME: 'Hum Fake' }, { ID: 2, NAME: 'Dois Fake' } ];
    var hana = require('@sap/hana-client');

    var connOptions = {
        serverNode: '196cb690-e735-4a5c-b3e9-92fd185b82af.hana.trial-us10.hanacloud.ondemand.com:443',
        encrypt: 'true',
        sslValidateCertificate: 'false',
        uid: 'TINY1_HDI_DB_1_2ZXJYQCE5B67FWTPDHHODV4P1_RT',
        pwd: 'Bg7enaH9rP8z4L1SWnioex4WST-mSz.0wc2HLkCHmaiCFq5Hy7AZKrSJbINZcllX7ClgvmpyZ1SPDXxMW9eA7GEpc4_.VlSN39B6peG9eFoUtu1b9IE.G7nMmwFM_LBk'
    };
    
    var connection = await hana.createConnection();

    connection.connect(connOptions);

    var sql = 'SELECT * FROM TINY1_HDI_DB_1.ENT1';

    var rows = await connection.exec(sql);

    return rows;
}

const getEnt1Proc = async ()=>{
    //return [ { ID: 1, NAME: 'Hum Fake' }, { ID: 2, NAME: 'Dois Fake' } ];
    var hana = require('@sap/hana-client');

    var connOptions = {
        serverNode: '196cb690-e735-4a5c-b3e9-92fd185b82af.hana.trial-us10.hanacloud.ondemand.com:443',
        encrypt: 'true',
        sslValidateCertificate: 'false',
        uid: 'TINY1_HDI_DB_1_2ZXJYQCE5B67FWTPDHHODV4P1_RT',
        pwd: 'Bg7enaH9rP8z4L1SWnioex4WST-mSz.0wc2HLkCHmaiCFq5Hy7AZKrSJbINZcllX7ClgvmpyZ1SPDXxMW9eA7GEpc4_.VlSN39B6peG9eFoUtu1b9IE.G7nMmwFM_LBk'
    };
    
    var connection = await hana.createConnection();

    connection.connect(connOptions);

    var sql = 'CALL "TINY1_HDI_DB_1"."get_ent1"(RESULT => ?)';

    var rows = await connection.exec(sql);

    return rows;
}


const hdiConnect = () => {
//API alternativa... não chegou a funcionar pra mim.
    const { HDI } = require('@sap/hdi');

    // This credentials object will be directly passed to the @sap/hana-client client. Any options accepted by the @sap/hana-client client can be passed.
    const credentials = {
        host: "196cb690-e735-4a5c-b3e9-92fd185b82af.hana.trial-us10.hanacloud.ondemand.com",
        port: "443",
        user: "TINY1_HDI_DB_1_2ZXJYQCE5B67FWTPDHHODV4P1_DT",
        password: "Qr4iTd.RYtVx.vG_ptbpf8g7UKhlP-wLcdGPZj_icrpI7BN8OqDuamYvqGhUyzhAnZ1lPzGPh9AgAeunp.D93HsRRY3Rm24XEe95DAeu0YCpduU-o237Jmqt4QIeMWU8"
    };

    const parameterSchema = "TINY1_HDI_DB_1";

    const hdi = new HDI(credentials, parameterSchema);

    let finalResult = "init result";

    hdi.connect((error, result) => {
        if (error) {
            finalResult =  "error 1";
        }

        hdi.listLibraries(null, (error, result) => {
            if (error) {
                finalResult = "error 2";
            }

            finalResult = "sucesso!";
            finalResult = result;
        })
    })

    return finalResult;
}

app.listen(8080)