'use strict';
let george, gregory, tiger, sponge, felix;
let money = document.querySelector('#money');
const catName = document.querySelector('#cat-name');
let catMone = 'george';
let catMoney = {
	george: 0,
	gregory: 0,
	tiger: 0,
	sponge: 0,
	felix: 0
};

$('#cat').click(function(e) {
	incrementMoney();
});

function incrementMoney() {
	switch (catMone) {
		case 'george':
			catMoney.george++;
			money.innerHTML = 'Money: ' + catMoney.george;
			break;
		case 'gregory':
			catMoney.gregory++;
			money.innerHTML = 'Money: ' + catMoney.gregory;
			break;
		case 'tiger':
			catMoney.tiger++;
			money.innerHTML = 'Money: ' + catMoney.tiger;
			break;
		case 'sponge':
			catMoney.sponge++;
			money.innerHTML = 'Money: ' + catMoney.sponge;
			break;
		case 'felix':
			catMoney.felix++;
			money.innerHTML = 'Money: ' + catMoney.felix;
			break;

	}
}

$('#george').click(function(e) {
	money.innerHTML = 'Money: ' + catMoney.george;
	$('#cat').attr('src', 'img/george.png');
	catName.innerHTML = 'george';
	catMone = 'george';
	
});

$('#gregory').click(function(e) {
	money.innerHTML = 'Money: ' + catMoney.gregory;
	$('#cat').attr('src', 'img/gregory.png');
	catName.innerHTML = 'gregory';
	catMone = 'gregory';
});

$('#tiger').click(function(e) {
	money.innerHTML = 'Money: ' + catMoney.tiger;
	$('#cat').attr('src', 'img/tiger.png');
	catName.innerHTML = 'tiger';
	catMone = 'tiger';
});

$('#sponge').click(function(e) {
	money.innerHTML = 'Money: ' + catMoney.sponge;
	$('#cat').attr('src', 'img/sponge.png');
	catName.innerHTML = 'sponge';
	catMone = 'sponge';
});

$('#felix').click(function(e) {
	money.innerHTML = 'Money: ' + catMoney.felix;
	$('#cat').attr('src', 'img/felix.png');
	catName.innerHTML = 'felix';
	catMone = 'felix';
});