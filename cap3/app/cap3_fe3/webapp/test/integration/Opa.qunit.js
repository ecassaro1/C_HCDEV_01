sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap3fe3/test/integration/pages/MainListReport' ,
        'cap3fe3/test/integration/pages/MainObjectPage',
        'cap3fe3/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap3fe3') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);