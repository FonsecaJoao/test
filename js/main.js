'use strict';

let moves = 0;
let money = document.querySelector('#money');

$('#cat').click(function(e) {
	incrementMoney();
});

$('#cat').tap(function(e) {
	incrementMoney();
})

function incrementMoney() {
	moves++;
	money.innerHTML = 'Money: ' + moves;
}

  