'use strict';
let george, gregory, tiger, sponge, felix;
let moves = 0;
let money = document.querySelector('#money');
const catName = document.querySelector('#cat-name');

$('#cat').click(function(e) {
	incrementMoney();
});

function incrementMoney() {
	moves++;
	money.innerHTML = 'Money: ' + moves;
}

$('#george').click(function(e) {
	$('#cat').attr('src', 'img/george.png');
	catName.innerHTML = 'george';
	george = moves;
});

$('#gregory').click(function(e) {
	$('#cat').attr('src', 'img/gregory.png');
	catName.innerHTML = 'gregory';
	gregory = moves;
});

$('#tiger').click(function(e) {
	$('#cat').attr('src', 'img/tiger.png');
	catName.innerHTML = 'tiger';
	tiger = moves;
});

$('#sponge').click(function(e) {
	$('#cat').attr('src', 'img/sponge.png');
	catName.innerHTML = 'sponge';
	sponge = moves;
});

$('#felix').click(function(e) {
	$('#cat').attr('src', 'img/felix.png');
	catName.innerHTML = 'felix';
	felix = moves;
});