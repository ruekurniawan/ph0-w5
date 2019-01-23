function sorting(arrNumber) {
  var listSort = arrNumber.sort( function(valuea ,valueb){ return valuea < valueb})
  return listSort;

}

function getTotal(arrNumber) {
  if(arrNumber.length === 0){
  	return ('""');
  }
  var highNumber = arrNumber[0];
  var count = 1;
  for(var i = 1; i < arrNumber.length; i++){
  	if(arrNumber[i] === highNumber){
  		count = count + 1;
  	}
  }
  countHighest = "angka paling besar adalah " +arrNumber[0]+ " dan jumlah kemunculan sebanyak "+count+ " kali";
  return countHighest;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''