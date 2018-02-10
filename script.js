var total = document.getElementById("totalYears");
var year = document.getElementById("inputs-yearSave");

year.addEventListener('input', changePrice);


var price = document.getElementById('inputs-startPrice');
var dollars = document.getElementById('dollars');

price.addEventListener('input', changePrice);


var compoundF = document.getElementById('frequency');

compoundF.addEventListener('change', function change(){
  console.log(("changed " + compoundF.value));
});

function changePrice() {
  console.log(price.value);
  dollars.innerText = price.value;

  if (year > 0) {
    total.innerText = year.value;
  }
}



// total = principal ( 1 + (i rate / compounds per year )) ^years