var worter = [
 'apfel',
 'orange',
 'banane',
 'birne',
 'banane'
];

//-----------------------------

// Schreib "gut" wenn zumindest eine von dem Obst Babane ist.

var esGibtBanane = false;
for (var i = 0; i < worter.length; ++i) {
    if (worter[i] == "banane") {
      // Wir mochten erinnern...
      esGibtBanane = true;
    }
}

if (esGibtBanane) {
    console.log("gut");
}
