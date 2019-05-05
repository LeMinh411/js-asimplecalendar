// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

//Lay cac doi tuong can thao tac tren layout
var selector = document.querySelector('select');
var daysOfMonth = document.querySelector('ul');
var monthSelected = document.querySelector('h2');

selector.onchange = function(){
  var choise = selector.value;
  var days = 31;
  //console.log(choise);

  if(choise === '2'){
    days = 29;
  }else if(choise === '4' || choise === '6' || choise === '9'|| choise === '11'){
    days = 30;
  }

  createCalendar(choise, days);
}

function createCalendar(choise, days){
  monthSelected.textContent = 'Tháng ' + choise;
  daysOfMonth.innerHTML = '';
  var day;
  for(let i = 1; i <= days; i++){
    day = document.createElement('li');
    day.textContent = i;
    daysOfMonth.appendChild(day);
  }
}

createCalendar(1,31);