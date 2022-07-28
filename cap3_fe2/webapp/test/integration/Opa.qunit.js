sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cap3fe2/test/integration/pages/MainListReport' ,
        'cap3fe2/test/integration/pages/MainObjectPage',
        'cap3fe2/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cap3fe2') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);