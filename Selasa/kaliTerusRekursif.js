function kaliTerusRekursif(angka) {
  var newString = String(angka);
  if(newString.length === 1) {
  	 return Number(newString)
  } else {
  	var count = 1;
  	for(var i = 0; i < newString.length; i++) {
  		count *= Number(newString[i])
  	}
  }
  return kaliTerusRekursif(count);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6