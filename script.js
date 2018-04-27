var tY = document.getElementById("totalYears");
var y = document.getElementById("inputs-yearSave");
var p = document.getElementById('inputs-startPrice');
var dollars = document.getElementById('dollars');
var r = document.getElementById("inputs-returnRate");
var f = document.getElementById('frequency');
var c = document.getElementById('inputs-addContribute');

y.addEventListener('input', changePrice);
p.addEventListener('input', changePrice);
r.addEventListener('input', changePrice);
f.addEventListener('change', changePrice);
c.addEventListener('input', changePrice);

function changePrice() {
  // Format check so we don't break the display
  if (p.value > 999999999 || p.value === "") {
    p.value = 0;
  }
  if (r.value > 50 || r === "") {
    r.value = 0;
  }
  if (y.value > 100) {
    y.value = 0;
  }
  if (y.value > 0 && y.value <= 100) {
    tY.innerText = y.value;
  }
  if (c.value === "") {
    c.value = 0;
  }

  // Calculate balance total with no interest
  if (r.value === "" || r.value === 0) {
    // Calculate compound interest for principal amount
    let balance = Math.round(parseInt(p.value, 10) + (y.value * (c.value * f.value)));
    // Update and display balance in USD formatting
    dollars.innerText = balance.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  } else {
    // Calculate future value of a series 
    let balance = Math.round(parseInt(p.value) * (Math.pow((1 + ((r.value / 100) / f.value)), (f.value * y.value))) * 100) / 100 +
      (parseInt(c.value)) * ((Math.pow((1 + ((r.value / 100) / f.value)), (f.value * y.value)) - 1) / ((r.value / 100) / f.value));
    // Update and display balance in USD formatting
    dollars.innerText = balance.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }
}