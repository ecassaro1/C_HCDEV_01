sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'caphana1fe1',
            componentId: 'Ent1List',
            entitySet: 'Ent1'
        },
        AdditionalCustomListReportDefinition
    );
});