function totalDigitRekursif(angka) {
  var strNumber = String(angka);
  if(strNumber.length === 1)
  {
  		return Number(strNumber);
  }
  else
  {		var newNumber = Number(strNumber[0])
  		strNumber = strNumber.slice(1);
  		return newNumber + totalDigitRekursif(Number(strNumber));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5