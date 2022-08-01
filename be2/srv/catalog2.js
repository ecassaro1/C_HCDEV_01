const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const Catalog1 = await cds.connect.to('Catalog1');

    this.on('READ', 'Cat1Ent1', async req => {
        return Catalog1.run(req.query);
    });
});
