const cds = require('@sap/cds');
var hdbext = require('@sap/hdbext');
const dbClass = require('sap-hdbext-promisfied');

module.exports = function (){
  this.on ('getAllEnt1', async (req)=>{
    try{
        const db = await cds.connect.to('db');
        let dbCon = new dbClass(
            await dbClass.createConnection(db.options.credentials)
        );
        const sp = await dbCon.loadProcedurePromisified(hdbext,null,"get_all_ent1");
        const output = await dbCon.callProcedurePromisified(sp,[]);

        let fResult = output.results.map((row)=>{
            return {
                "ID":row.ID,
                "name":row.NAME
            }
        });
        console.log(fResult);
        return fResult;
    }
    catch (error) {
        console.log(error);
        return;
    }
  })
}