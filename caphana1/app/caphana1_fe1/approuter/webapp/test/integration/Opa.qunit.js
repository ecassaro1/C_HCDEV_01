sap.ui.require(["sap/fe/test/JourneyRunner","caphana1fe1/test/integration/pages/MainListReport","caphana1fe1/test/integration/pages/MainObjectPage","caphana1fe1/test/integration/OpaJourney"],function(e,a,n,t){"use strict";var e=new e({launchUrl:sap.ui.require.toUrl("caphana1fe1")+"/index.html"});e.run({pages:{onTheMainPage:a,onTheDetailPage:n}},t.run)});