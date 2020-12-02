const bill = document.getElementById('bill');
const service = document.getElementById('service');
const people = document.getElementById('people');
const calculate = document.getElementById('calculate');
const amount = document.getElementById('amount');
const each = document.getElementById('each');

calculate.addEventListener("click", calculateTip);

function calculateTip(e) {
  e.preventDefault();


  if (bill.value == '' || service.value == 'default' || people.value == '') {
    alert('Please fill all fields!');
  } else {
    amount.textContent = parseFloat(service.value * bill.value / 100 / people.value).toFixed(2);
    each.style.display = 'block';

    if (people.value == 1) {
      each.style.display = 'none';
    }
  }

}
