var countfrikandel = 0;
var counthamburger = 0;
var countcolaflesje = 0;
var countpindakaas = 0;
var countcroissant = 0;
var countstokbrood = 0;
var countaardappel = 0;
var countpizza = 0;
var countbroodjekroket = 0;
var countpretzel = 0;
var countzakfriet = 0;
var countpannenkoekenmix = 0;
var count30eieren = 0;
var countwater = 0;
var countfristi = 0;
var countfanta = 0;
var countchocomel = 0;
var countmelk = 0;
var countsparood = 0;
var counticetea = 0;
var countranja = 0;
var countcolazero = 0;
var countradler = 0;
var countjus = 0;
var pricefrikandel = 0.50;
var pricehamburger = 0.80;
var pricecolaflesje = 0.50;
var pricepindakaas = 3.50;
var pricecroissant = 0.30;
var pricestokbrood = 1.50;
var priceaardappel = 1.70;
var pricepizza = 3.75;
var pricebroodjekroket = 0.99;
var pricepretzel = 0.75;
var pricezakfriet = 3.75;
var pricepannenkoekenmix = 1.00;
var price30eieren = 3.50;
var pricewater = 0.99;
var pricefristi = 1.50;
var pricefanta = 1.20;
var pricechocomel = 1.60;
var pricemelk = 1.50;
var pricesparood = 0.89;
var priceicetea = 1.99;
var priceranja = 2.99;
var pricecolazero = 3.99;
var priceradler = 0.99;
var pricejus = 1.30;


// Frikandelbroodje

function addProductFrikandelbroodje() {
countfrikandel ++;
var location = document.getElementById('product1');
var toReplaceFrikandel = '<span> Frikandelbroodje (' + countfrikandel + ")" + "<p id = floatright>" + "€"  + (Math.round(pricefrikandel * countfrikandel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFrikandelbroodje() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFrikandelbroodje() > - </button>' + '<br>'  ;
if (countfrikandel < 50) {
  location.innerHTML = toReplaceFrikandel;
  everybutton();
} else {
  location.innerHTML = '<span> Frikandelbroodje (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(49.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFrikandelbroodje() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFrikandelbroodje() > - </button>' + '<br>'  ;
  countfrikandel --;
  everybutton();
}
}

function removeProductFrikandelbroodje() {
  countfrikandel --;
  var location = document.getElementById('product1');
  if (countfrikandel > 0) {
  location.innerHTML =  '<span> Frikandelbroodje (' + countfrikandel + ")" + "<p id = floatright>" + "€"  + (Math.round(pricefrikandel * countfrikandel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFrikandelbroodje() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFrikandelbroodje() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// Hamburger

function addProductHamburger() {
counthamburger ++;
var location = document.getElementById('product2');
var toReplaceHamburger = '<span> Hamburger (' + counthamburger + ")" + "<p id = floatright>" + "€"  + (Math.round(pricehamburger * counthamburger * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductHamburger() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductHamburger() > - </button>' + '<br>'  ;
if (counthamburger < 50) {
  location.innerHTML = toReplaceHamburger;
  everybutton();
} else {
  location.innerHTML = '<span> Hamburger (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(40.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductHamburger() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductHamburger() > - </button>' + '<br>'  ;
  counthamburger --;
  everybutton();
}
}

function removeProductHamburger() {
  counthamburger --;
  var location = document.getElementById('product2');
  if (counthamburger > 0) {
  location.innerHTML =  '<span> Hamburger (' + counthamburger + ")" + "<p id = floatright>" + "€"  + (Math.round (counthamburger * pricehamburger * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductHamburger() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductHamburger() > - </button>' +  '<br>' ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}

// Colaflesje

function addProductColaflesje() {
countcolaflesje ++;

var location = document.getElementById('product24');
var toReplaceColaflesje = '<span> Colaflesje (' + countcolaflesje + ")" + "<p id = floatright>" + "€"  + (Math.round (countcolaflesje * pricecolaflesje * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductColaflesje() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductColaflesje() > - </button>' +  '<br>' ;
everybutton();
if (countcolaflesje < 50) {
  location.innerHTML = toReplaceColaflesje;
  everybutton();
} else {
  location.innerHTML = '<span> Colaflesje (' + countcolaflesje + ")" + "<p id = floatright>" + "€"  + (Math.round (countcolaflesje * pricecolaflesje * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductColaflesje() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductColaflesje() > - </button>' +  '<br>' ;
  everybutton();
}
}

function removeProductColaflesje() {
  countcolaflesje --;
  var location = document.getElementById('product24');
  if (countcolaflesje > 0) {
  location.innerHTML =  '<span> Colaflesje (' + countcolaflesje + ")" + "<p id = floatright>" + "€"  + (Math.round (countcolaflesje * pricecolaflesje * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductColaflesje() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductColaflesje() > - </button>' +  '<br>' ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}

// Pindakaas

function addProductPindakaas() {
countpindakaas ++;

var location = document.getElementById('product3');
var toReplacePindakaas = '<span> Pindakaas (' + countpindakaas + ")" + "<p id = floatright>" + "€"  + (Math.round (countpindakaas * pricepindakaas * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPindakaas() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPindakaas() > - </button>' +  '<br>' ;

if (countpindakaas < 50) {
  location.innerHTML = toReplacePindakaas;
  everybutton();
} else {
  location.innerHTML = '<span> Pindakaas (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round (175.00 * 100) / 100).toFixed(2) + "</p>"  + '<br>'  ;
  countpindakaas --;
  everybutton();
}
}

function removeProductPindakaas() {
  countpindakaas --;
  var location = document.getElementById('product3');
  if (countpindakaas > 0) {
  location.innerHTML =  '<span> Pindakaas (' + countpindakaas + ")" + "<p id = floatright>" + "€"  + (Math.round (countpindakaas * pricepindakaas * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPindakaas() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPindakaas() > - </button>' +  '<br>' ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}



// Croissant

function addProductCroissant() {
countcroissant ++;

var location = document.getElementById('product4');
var toReplaceCroissant = '<span> Croissant (' + countcroissant + ")" + "<p id = floatright>" + "€"  + (Math.round (countcroissant * pricecroissant * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductCroissant() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductCroissant() > - </button>' +  '<br>' ;

if (countcroissant < 50) {
  location.innerHTML = toReplaceCroissant;
  everybutton();
} else {
  location.innerHTML = '<span> Croissant (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round (15.00 * 100) / 100).toFixed(2) + "</p>"  + '<br>'  ;
  countcroissant --;
  everybutton();
}
}

function removeProductCroissant() {
  countcroissant --;
  var location = document.getElementById('product4');
  if (countcroissant > 0) {
  location.innerHTML =  '<span> Croissant (' + countcroissant + ")" + "<p id = floatright>" + "€"  + (Math.round (countcroissant * pricecroissant * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductCroissant() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductCroissant() > - </button>' +  '<br>' ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// Stokbrood

function addProductStokbrood() {
countstokbrood ++;

var location = document.getElementById('product5');
var toReplaceStokbrood = '<span> Stokbrood (' + countstokbrood + ")" + "<p id = floatright>" + "€"  + (Math.round (countstokbrood * pricestokbrood * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductStokbrood() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductStokbrood() > - </button>' +  '<br>' ;

if (countstokbrood < 50) {
  location.innerHTML = toReplaceStokbrood;
  everybutton();
} else {
  location.innerHTML = '<span> Stokbrood (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round (75.00 * 100) / 100).toFixed(2) + "</p>"   + '<br>'  ;
  countstokbrood --;
  everybutton();
}
}

function removeProductStokbrood() {
  countstokbrood --;
  var location = document.getElementById('product5');
  if (countstokbrood > 0) {
  location.innerHTML =  '<span> Stokbrood (' + countstokbrood+ ")" + "<p id = floatright>" + "€"  + (Math.round (countstokbrood * pricestokbrood * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductStokbrood() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductStokbrood() > - </button>' +  '<br>' ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}

function addProductAardappel() {
countaardappel ++;
var location = document.getElementById('product6');
var toReplaceAardappel = '<span> 1kg aardappelen (' + countaardappel + ")" + "<p id = floatright>" + "€"  + (Math.round(priceaardappel * countaardappel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductAardappel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductAardappel() > - </button>' + '<br>'  ;
if (countaardappel < 50) {
  location.innerHTML = toReplaceAardappel;
  everybutton();
} else {
  location.innerHTML = '<span> 1kg aardappelen (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(85.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductAardappel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductAardappel() > - </button>' + '<br>'  ;
  countaardappel --;
  everybutton();
}
}

function removeProductAardappel() {
  countaardappel --;
  var location = document.getElementById('product6');
  if (countaardappel > 0) {
  location.innerHTML =  '<span> 1kg aardappelen (' + countaardappel + ")" + "<p id = floatright>" + "€"  + (Math.round(priceaardappel * countaardappel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductAardappel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductAardappel() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}

// Broodje kroket

function addProductBroodjekroket() {
countbroodjekroket ++;
var location = document.getElementById('product7');
var toReplaceBroodjekroket = '<span> Broodje kroket (' + countbroodjekroket + ")" + "<p id = floatright>" + "€"  + (Math.round(pricebroodjekroket * countbroodjekroket * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductBroodjekroket() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductBroodjekroket() > - </button>' + '<br>'  ;
if (countbroodjekroket < 50) {
  location.innerHTML = toReplaceBroodjekroket;
  everybutton();
} else {
  location.innerHTML = '<span> Broodje kroket (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(49.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductBroodjekroket() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductBroodjekroket() > - </button>' + '<br>'  ;
  countbroodjekroket--;
  everybutton();
}
}

function removeProductBroodjekroket() {
  countbroodjekroket --;
  var location = document.getElementById('product7');
  if (countbroodjekroket > 0) {
  location.innerHTML =  '<span> Broodje kroket (' + countbroodjekroket + ")" + "<p id = floatright>" + "€"  + (Math.round(pricebroodjekroket * countbroodjekroket * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductBroodjekroket() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductBroodjekroket() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}

//Pizza


function addProductPizza() {
countpizza ++;
var location = document.getElementById('product8');
var toReplacePizza = '<span> Pizza (' + countpizza + ")" + "<p id = floatright>" + "€"  + (Math.round(pricepizza * countpizza * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPizza() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPizza() > - </button>' + '<br>'  ;
if (countpizza < 50) {
  location.innerHTML = toReplacePizza;
  everybutton();
} else {
  location.innerHTML = '<span> Pizza (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(375.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPizza() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPizza() > - </button>' + '<br>'  ;
  countpizza--;
  everybutton();
}
}

function removeProductPizza() {
  countpizza --;
  var location = document.getElementById('product8');
  if (countpizza > 0) {
  location.innerHTML =  '<span> Pizza (' + countpizza + ")" + "<p id = floatright>" + "€"  + (Math.round(pricepizza * countpizza * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPizza() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPizza() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}



// Pretzel


function addProductPretzel() {
countpretzel ++;
var location = document.getElementById('product9');
var toReplacePretzel = '<span> Pretzel (' + countpretzel + ")" + "<p id = floatright>" + "€"  + (Math.round(pricepretzel * countpretzel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPretzel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPretzel() > - </button>' + '<br>'  ;
if (countpretzel < 50) {
  location.innerHTML = toReplacePretzel;
  everybutton();
} else {
  location.innerHTML = '<span> Pretzel (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(37.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPretzel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPretzel() > - </button>' + '<br>'  ;
  countpretzel--;
  everybutton();
}
}

function removeProductPretzel() {
  countpretzel --;
  var location = document.getElementById('product9');
  if (countpretzel > 0) {
  location.innerHTML =  '<span> Pretzel (' + countpretzel + ")" + "<p id = floatright>" + "€"  + (Math.round(pricepretzel * countpretzel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPretzel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPretzel() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// Zak friet

function addProductZakfriet() {
countzakfriet ++;
var location = document.getElementById('product10');
var toReplaceZakfriet = '<span> Zak friet 2,5kg (' + countzakfriet + ")" + "<p id = floatright>" + "€"  + (Math.round(pricezakfriet * countzakfriet * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductZakfriet() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductZakfriet() > - </button>' + '<br>'  ;
if (countzakfriet < 50) {
  location.innerHTML = toReplaceZakfriet;
  everybutton();
} else {
  location.innerHTML = '<span> Zak friet 2,5kg (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(187.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductZakfriet() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductZakfriet() > - </button>' + '<br>'  ;
  countzakfriet--;
  everybutton();
}
}

function removeProductZakfriet() {
  countzakfriet --;
  var location = document.getElementById('product10');
  if (countzakfriet > 0) {
  location.innerHTML =  '<span> Zakfriet 2,5kg (' + countzakfriet + ")" + "<p id = floatright>" + "€"  + (Math.round(pricezakfriet * countzakfriet * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductZakfriet() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductZakfriet() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// Pannenkoekenmix

function addProductPannenkoekenmix() {
countpannenkoekenmix ++;
var location = document.getElementById('product11');
var toReplacePannenkoekenmix = '<span> Pannenkoekenmix (' + countpannenkoekenmix + ")" + "<p id = floatright>" + "€"  + (Math.round(pricepannenkoekenmix * countpannenkoekenmix * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPannenkoekenmix() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPannenkoekenmix() > - </button>' + '<br>'  ;
if (countpannenkoekenmix < 50) {
  location.innerHTML = toReplacePannenkoekenmix;
  everybutton();
} else {
  location.innerHTML = '<span> Pannenkoekenmix (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(50.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPannenkoekenmix() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPannenkoekenmix() > - </button>' + '<br>'  ;
  countpannenkoekenmix--;
  everybutton();
}
}

function removeProductPannenkoekenmix() {
  countpannenkoekenmix --;
  var location = document.getElementById('product11');
  if (countpannenkoekenmix > 0) {
  location.innerHTML =  '<span> Pannenkoekenmix (' + countpannenkoekenmix + ")" + "<p id = floatright>" + "€"  + (Math.round(pricepannenkoekenmix * countpannenkoekenmix * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductPannenkoekenmix() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductPannenkoekenmix() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// 30 eieren

function addProduct30eieren() {
count30eieren ++;
var location = document.getElementById('product12');
var toReplace30eieren = '<span> 30 eieren (' + count30eieren + ")" + "<p id = floatright>" + "€"  + (Math.round(price30eieren * count30eieren * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProduct30eieren() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProduct30eieren() > - </button>' + '<br>'  ;
if (count30eieren < 50) {
  location.innerHTML = toReplace30eieren;
  everybutton();
} else {
  location.innerHTML = '<span> 30 eieren (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(175.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProduct30eieren() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProduct30eieren() > - </button>' + '<br>'  ;
  count30eieren--;
  everybutton();
}
}

function removeProduct30eieren() {
  count30eieren --;
  var location = document.getElementById('product12');
  if (count30eieren > 0) {
  location.innerHTML =  '<span> 30 eieren (' + count30eieren + ")" + "<p id = floatright>" + "€"  + (Math.round(price30eieren * count30eieren * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProduct30eieren() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProduct30eieren() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// water


function addProductWater() {
countwater ++;
var location = document.getElementById('product13');
var toReplaceWater = '<span> Water (' + countwater + ")" + "<p id = floatright>" + "€"  + (Math.round(pricewater * countwater * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductWater() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductWater() > - </button>' + '<br>'  ;
if (countwater < 50) {
  location.innerHTML = toReplaceWater;
  everybutton();
} else {
  location.innerHTML = '<span> Water (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(45.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductWater() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductWater() > - </button>' + '<br>'  ;
  countwater--;
  everybutton();
}
}

function removeProductWater() {
  countwater --;
  var location = document.getElementById('product13');
  if (countwater > 0) {
  location.innerHTML =  '<span> Water (' + countwater + ")" + "<p id = floatright>" + "€"  + (Math.round(pricewater * countwater * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductWater() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductWater() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// fristi

function addProductFristi() {
countfristi ++;
var location = document.getElementById('product14');
var toReplaceFristi = '<span> Fristi (' + countfristi + ")" + "<p id = floatright>" + "€"  + (Math.round(pricefristi * countfristi * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFristi() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFristi() > - </button>' + '<br>'  ;
if (countfristi < 50) {
  location.innerHTML = toReplaceFristi;
  everybutton();
} else {
  location.innerHTML = '<span> Fristi (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(75.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFristi() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFristi() > - </button>' + '<br>'  ;
  countfristi--;
  everybutton();
}
}

function removeProductFristi() {
  countfristi --;
  var location = document.getElementById('product14');
  if (countfristi > 0) {
  location.innerHTML =  '<span> Fristi (' + countfristi + ")" + "<p id = floatright>" + "€"  + (Math.round(pricefristi * countfristi * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFristi() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFristi() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}



// fanta

function addProductFanta() {
countfanta ++;
var location = document.getElementById('product15');
var toReplaceFanta = '<span> Fanta (' + countfanta + ")" + "<p id = floatright>" + "€"  + (Math.round(pricefanta * countfanta * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFanta() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFanta() > - </button>' + '<br>'  ;
if (countfanta < 50) {
  location.innerHTML = toReplaceFanta;
  everybutton();
} else {
  location.innerHTML = '<span> Fanta (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(60.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFanta() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFanta() > - </button>' + '<br>'  ;
  countfanta--;
  everybutton();
}
}

function removeProductFanta() {
  countfanta --;
  var location = document.getElementById('product15');
  if (countfanta > 0) {
  location.innerHTML =  '<span> Fanta (' + countfanta + ")" + "<p id = floatright>" + "€"  + (Math.round(pricefanta * countfanta * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductFanta() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductFanta() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// Chocomel

function addProductChocomel() {
countchocomel ++;
var location = document.getElementById('product16');
var toReplaceChocomel = '<span> Chocomel (' + countchocomel + ")" + "<p id = floatright>" + "€"  + (Math.round(pricechocomel * countchocomel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductChocomel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductChocomel() > - </button>' + '<br>'  ;
if (countchocomel < 50) {
  location.innerHTML = toReplaceChocomel;
  everybutton();
} else {
  location.innerHTML = '<span> Chocomel (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(80.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductChocomel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductChocomel() > - </button>' + '<br>'  ;
  countchocomel--;
  everybutton();
}
}

function removeProductChocomel() {
  countchocomel --;
  var location = document.getElementById('product16');
  if (countchocomel > 0) {
  location.innerHTML =  '<span> Chocomel (' + countchocomel + ")" + "<p id = floatright>" + "€"  + (Math.round(pricechocomel * countchocomel * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductChocomel() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductChocomel() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}



function addProductMelk() {
countmelk ++;
var location = document.getElementById('product17');
var toReplaceMelk = '<span> Melk (' + countmelk + ")" + "<p id = floatright>" + "€"  + (Math.round(pricemelk * countmelk * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductMelk() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductMelk() > - </button>' + '<br>'  ;
if (countmelk < 50) {
  location.innerHTML = toReplaceMelk;
  everybutton();
} else {
  location.innerHTML = '<span> Melk (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(75.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductMelk() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductMelk() > - </button>' + '<br>'  ;
  countmelk--;
  everybutton();
}
}

function removeProductMelk() {
  countmelk --;
  var location = document.getElementById('product17');
  if (countmelk > 0) {
  location.innerHTML =  '<span> Melk (' + countmelk + ")" + "<p id = floatright>" + "€"  + (Math.round(pricemelk * countmelk * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductMelk() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductMelk() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// Sparood

function addProductSparood() {
countsparood ++;
var location = document.getElementById('product18');
var toReplaceSparood = '<span> Spa rood (' + countsparood + ")" + "<p id = floatright>" + "€"  + (Math.round(pricesparood * countsparood * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductSparood() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductSparood() > - </button>' + '<br>'  ;
if (countsparood < 50) {
  location.innerHTML = toReplaceSparood;
  everybutton();
} else {
  location.innerHTML = '<span> Spa rood (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(44.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductSparood() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductSparood() > - </button>' + '<br>'  ;
  countsparood--;
  everybutton();
}
}

function removeProductSparood() {
  countsparood --;
  var location = document.getElementById('product18');
  if (countsparood > 0) {
  location.innerHTML =  '<span> Spa rood (' + countsparood + ")" + "<p id = floatright>" + "€"  + (Math.round(pricesparood * countsparood * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductSparood() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductSparood() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// ice tea

function addProductIcetea() {
counticetea ++;
var location = document.getElementById('product19');
var toReplaceIcetea = '<span> Ice tea (' + counticetea + ")" + "<p id = floatright>" + "€"  + (Math.round(priceicetea * counticetea * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductIcetea() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductIcetea() > - </button>' + '<br>'  ;
if (counticetea < 50) {
  location.innerHTML = toReplaceIcetea;
  everybutton();
} else {
  location.innerHTML = '<span> Ice tea (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(99.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductIcetea() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductIcetea() > - </button>' + '<br>'  ;
  counticetea--;
  everybutton();
}
}

function removeProductIcetea() {
  counticetea --;
  var location = document.getElementById('product19');
  if (counticetea > 0) {
  location.innerHTML =  '<span> Ice tea (' + counticetea + ")" + "<p id = floatright>" + "€"  + (Math.round(priceicetea * counticetea * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductIcetea() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductIcetea() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// Ranja

function addProductRanja() {
countranja ++;
var location = document.getElementById('product20');
var toReplaceRanja = '<span> Ranja (' + countranja + ")" + "<p id = floatright>" + "€"  + (Math.round(priceranja * countranja * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductRanja() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductRanja() > - </button>' + '<br>'  ;
if (countranja < 50) {
  location.innerHTML = toReplaceRanja;
  everybutton();
} else {
  location.innerHTML = '<span> Broodje kroket (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(149.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductRanja() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductRanja() > - </button>' + '<br>'  ;
  countranja--;
  everybutton();
}
}

function removeProductRanja() {
  countranja --;
  var location = document.getElementById('product20');
  if (countranja > 0) {
  location.innerHTML =  '<span> Ranja (' + countranja + ")" + "<p id = floatright>" + "€"  + (Math.round(priceranja * countranja * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductRanja() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductRanja() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


// colazero

function addProductColazero() {
countcolazero ++;
var location = document.getElementById('product21');
var toReplaceColazero = '<span> Cola zero (' + countcolazero + ")" + "<p id = floatright>" + "€"  + (Math.round(pricecolazero * countcolazero * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductColazero() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductColazero() > - </button>' + '<br>'  ;
if (countcolazero < 50) {
  location.innerHTML = toReplaceColazero;
  everybutton();
} else {
  location.innerHTML = '<span> Cola zero (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(199.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductColazero() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductColazero() > - </button>' + '<br>'  ;
  countcolazero--;
  everybutton();
}
}

function removeProductColazero() {
  countcolazero --;
  var location = document.getElementById('product21');
  if (countcolazero > 0) {
  location.innerHTML =  '<span> Cola zero (' + countcolazero + ")" + "<p id = floatright>" + "€"  + (Math.round(pricecolazero * countcolazero * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductColazero() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductColazero() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}

// radler

function addProductRadler() {
countradler ++;
var location = document.getElementById('product22');
var toReplaceRadler = '<span> Radler (' + countradler + ")" + "<p id = floatright>" + "€"  + (Math.round(priceradler * countradler * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductRadler() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductRadler() > - </button>' + '<br>'  ;
if (countradler < 50) {
  location.innerHTML = toReplaceRadler;
  everybutton();
} else {
  location.innerHTML = '<span> Radler(' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(49.50 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductRadler() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductRadler() > - </button>' + '<br>'  ;
  countradler--;
  everybutton();
}
}

function removeProductRadler() {
  countradler --;
  var location = document.getElementById('product22');
  if (countradler > 0) {
  location.innerHTML =  '<span> Radler (' + countradler + ")" + "<p id = floatright>" + "€"  + (Math.round(priceradler * countradler * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductRadler() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductRadler() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}

// jus

function addProductJus() {
countjus ++;
var location = document.getElementById('product23');
var toReplaceJus = '<span> Jus d orange (' + countjus + ")" + "<p id = floatright>" + "€"  + (Math.round(pricejus * countjus * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductJus() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductJus() > - </button>' + '<br>'  ;
if (countjus < 50) {
  location.innerHTML = toReplaceJus;
  everybutton();
} else {
  location.innerHTML = '<span> Jus d orange (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(65.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductJus() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductJus() > - </button>' + '<br>'  ;
  countjus--;
  everybutton();
}
}

function removeProductJus() {
  countjus --;
  var location = document.getElementById('product23');
  if (countjus > 0) {
  location.innerHTML =  '<span> Jus d orange (' + countjus + ")" + "<p id = floatright>" + "€"  + (Math.round(pricejus * countjus * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductJus() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductJus() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}


//voorbeeld
function addProductCapital() {
countlowercase ++;
var location = document.getElementById('product8');
var toReplaceCapital = '<span> Capital (' + countlowercase + ")" + "<p id = floatright>" + "€"  + (Math.round(pricelowercase * countlowercase * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductCapital() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductCapital() > - </button>' + '<br>'  ;
if (countlowercase < 50) {
  location.innerHTML = toReplaceCapital;
  everybutton();
} else {
  location.innerHTML = '<span> Broodje kroket (' + 50 + ")" + "<p id = floatright>" + "€"  + (Math.round(85.00 * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductCapital() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductCapital() > - </button>' + '<br>'  ;
  countlowercase--;
  everybutton();
}
}

function removeProductCapital() {
  countlowercase --;
  var location = document.getElementById('product8');
  if (countlowercase > 0) {
  location.innerHTML =  '<span> Capital (' + countlowercase + ")" + "<p id = floatright>" + "€"  + (Math.round(pricelowercase * countlowercase * 100) / 100).toFixed(2) + "</p>" + '<button class= "addbuttons" type= "button" onclick= addProductCapital() > + </button>' + '<button class= "removebuttons" type= "button" onclick= removeProductCapital() > - </button>' +  '<br>'  ;
  everybutton();
} else {
  location.innerHTML = "";
  everybutton();
}
}



//Totaal bedrag
function everybutton() {
var locationtotal = document.getElementById('total');
locationtotal.innerHTML = "Totaal " + "€" + (countfrikandel * pricefrikandel + counthamburger * pricehamburger + countcolaflesje * pricecolaflesje + countpindakaas * pricepindakaas + countcroissant * pricecroissant + countstokbrood * pricestokbrood + countaardappel * priceaardappel + pricepizza * countpizza + countpretzel * pricepretzel + pricezakfriet * countzakfriet + pricepannenkoekenmix * countpannenkoekenmix + count30eieren * price30eieren + pricebroodjekroket * countbroodjekroket + countwater * pricewater + countfristi * pricefristi + pricefanta * countfanta + countchocomel * pricechocomel + pricesparood * countsparood + countmelk * pricemelk + counticetea * priceicetea + countranja * priceranja + pricecolazero * countcolazero + priceradler * countradler + countjus * pricejus).toFixed(2) + "</p>";
}









var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}
