app.factory('prodcutFactory', ()=>{
    window.gung = {};
    window.gung.categories = JSON.parse('{"id": "sROT","name": "Produktsida","children": [{"id": "s04","name": "Slang & Kabelupprullare","children": [{"id": "s0405","name": "Avfettning","children": [{	"id": "AV300-1006",	"name": "Slangupprullare Avfettning 10m",	"children": []},{	"id": "AV450-1006",	"name": "Slanguppr. avfettning 10m 2",	"children": []},{	"id": "AV430-1506",	"name": "Slangupprullare Avfettning 15m",	"children": []}]}, {"id": "s0406","name": "Avspärrning","children": [{	"id": "VXL-10WK",	"name": "Upprullare för avspärrning 10 m",	"children": []},{	"id": "VXL-15WK",	"name": "Upprullare för avspärrning 15 m",	"children": []},{	"id": "VXL-20WK",	"name": "Upprullare för avspärrning 20 m",	"children": []}]}, {"id": "s0407","name": "Butan/Propan","children": [{	"id": "8430-802",	"name": "Slanguppr. för Butan & Propan med 20m",	"children": []},{	"id": "8430-804",	"name": "Slanguppr. för Butan & Propan med 18m",	"children": []}]}]}]}');
    window.gung.products = JSON.parse('{"AV300-1006": {"id": "AV300-1006","name": "Slangupprullare Avfettning 10m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "TU","LGA": "       -1.00","PRI": "    4170.00","TYP": "","VOL": "    3.500","VPE": "   14.500","XP1": "          0","XP2": "          0"}}},"AV450-1006": {"id": "AV450-1006","name": "Slanguppr. avfettning 10m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "TU","LGA": "       0.00","PRI": "    4115.00","TYP": "","VOL": "    2.700","VPE": "    0.000","XP1": "          0","XP2": "          0"}}},"AV430-1506": {"id": "AV430-1506","name": "Slangupprullare Avfettning 15m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "TU","LGA": "       1.00","PRI": "    4875.00","TYP": "","VOL": "    5.300","VPE": "    0.000","XP1": "          0","XP2": "          0"}}},"VXL-10WK": {"id": "VXL-10WK","name": "Upprullare för avspärrning 10 m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "TU","LGA": "       2.00","PRI": "    3050.00","TYP": "","VOL": "    1.700","VPE": "    0.000","XP1": "          0","XP2": "          0"}}},"VXL-15WK": {"id": "VXL-15WK","name": "Upprullare för avspärrning 15 m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "TU","LGA": "       0.00","PRI": "    3420.00","TYP": "","VOL": "    3.200","VPE": "    0.000","XP1": "          0","XP2": "          0"}}},"VXL-20WK": {"id": "VXL-20WK","name": "Upprullare för avspärrning 20 m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "TU","LGA": "       3.00","PRI": "    3830.00","TYP": "","VOL": "    1.100","VPE": "    0.000","XP1": "          0","XP2": "          0"}}},"8430-802": {"id": "8430-802","name": "Slanguppr. för Butan & Propan med 20m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "SV","LGA": "       1.00","PRI": "    7170.00","TYP": "","VOL": "    5.200","VPE": "    0.000","XP1": "          0","XP2": "          0"}}},"8430-804": {"id": "8430-804","name": "Slanguppr. för Butan & Propan med 18m","children": [],"extra": {"AGA": {"APE": "      1","KAT": "SV","LGA": "       3.00","PRI": "    7200.00","TYP": "","VOL": "    7.500","VPE": "   20.200","XP1": "          0","XP2": "          0"}}}}');

    //Get categories
    window.getAlotOfCategories = function(cb){
        var sROT = {
            id: "sROT",
            name: "Produktsida"
        };
    
        var populateProducts = function(n, category){
            var children = [];
            for( var i = 0; i < 100000; i++ ){
                children.push({
                    id: "RAND_"+n+"_"+i,
                    name: "Product "+n+"_"+i
                });
            }
            return children;
        };
    
        sROT.children = [];
        for( var n = 0; n < 5; n++ ){
            var child = {
                id: "sRand0"+n,
                name: "Random category "+n
            };
            child.children = populateProducts(n);
            sROT.children.push(child);
        }
    
        setTimeout(function() {
            cb && cb(sROT);
        }, Math.random()*3000);
    };

    //get random product
    window.getRandomProduct = function(id, cb){
       
        var productKeys = Object.keys(window.gung.products);
        var targetId = productKeys[id.hashCode() % productKeys.length];
        
        setTimeout(function() {
            var target = window.gung.products[targetId];
         
            cb && cb(target);
        }, Math.random()*300);
    };
 
    return window
});