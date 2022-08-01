sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'caphana1fe1/test/integration/pages/MainListReport' ,
        'caphana1fe1/test/integration/pages/MainObjectPage',
        'caphana1fe1/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('caphana1fe1') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);