
var eur = parseFloat(prompt('Enter EURO: '));
var usd = parseFloat(prompt('Enter USD: '));

var usdToUah = 27.46;
var eurToUah = 33.85;

if (eur > 0 && usd > 0) {
  console.log(`${eur} euros are equal ${(eur * eurToUah) % 1 ? (eur * eurToUah) : (eur * eurToUah).toFixed(2)} UAH, ${usd} dollars are equal ${(usd * usdToUah).toFixed(3)} UAH, one euro is
  equal ${(eurToUah / usdToUah) % 1 ? (eurToUah / usdToUah) : (eurToUah / usdToUah).toFixed(2)} dollars.`);
}