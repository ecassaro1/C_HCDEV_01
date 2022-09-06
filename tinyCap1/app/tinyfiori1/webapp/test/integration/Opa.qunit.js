sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tinyfiori1/test/integration/pages/MainListReport' ,
        'tinyfiori1/test/integration/pages/MainObjectPage',
        'tinyfiori1/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tinyfiori1') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);