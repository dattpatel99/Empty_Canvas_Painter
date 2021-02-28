/*
Code from: https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse
Credit to: user1083202 from stackoverflow
Why I coped: (why reinvent the wheel....)
*/

var canvas,
	ctx,
	flag = false,
	prevX = 0,
	currX = 0,
	prevY = 0,
	currY = 0,
	dot_flag = false;

var x = "black",
	y = 2;

function init() {
	canvas = document.getElementById("can");
	ctx = canvas.getContext("2d");
	width = canvas.width;
	height = canvas.height;

	canvas.addEventListener(
		"mousemove",
		function (event) {
			findxy("move", event);
		},
		false
	);
	canvas.addEventListener(
		"mousedown",
		function (event) {
			findxy("down", event);
		},
		false
	);
	canvas.addEventListener(
		"mouseup",
		function (event) {
			findxy("up", event);
		},
		false
	);
	canvas.addEventListener(
		"mouseout",
		function (event) {
			findxy("out", event);
		},
		false
	);
}

function changeColor(obj) {
	switch (obj) {
		case "green":
			x = "green";
			break;
		case "blue":
			x = "blue";
			break;
		case "red":
			x = "red";
			break;
		case "yellow":
			x = "yellow";
			break;
		case "orange":
			x = "orange";
			break;
		case "black":
			x = "black";
			break;
		case "white":
			x = "white";
			break;
	}
	if (x == "white") y = 14;
	else y = 2;
}

function draw() {
	ctx.beginPath(); // Starts new path
	ctx.moveTo(prevX, prevY); // This moves the brush to the prev coor
	ctx.lineTo(currX, currY); // This makes line from the moveTo() to the curr Coor

	// Defines what how to make the strokes
	ctx.strokeStyle = x;
	ctx.lineWidth = y;
	ctx.stroke();
	ctx.closePath();
}

function findxy(res, e) {
	if (res == "down") {
		prevX = currX;
		prevY = currY;
		currX = e.clientX - canvas.offsetLeft;
		currY = e.clientY - canvas.offsetTop;

		flag = true;
		dot_flag = true;
		if (dot_flag) {
			ctx.beginPath();
			ctx.fillStyle = x;
			ctx.fillRect(currX, currY, 2, 2);
			ctx.closePath();
			dot_flag = false;
		}
	}
	if (res == "up" || res == "out") {
		flag = false;
	}
	if (res == "move") {
		if (flag) {
			// Ensure that mouse is not outside or not up
			prevX = currX;
			prevY = currY;
			currX = e.clientX - canvas.offsetLeft;
			currY = e.clientY - canvas.offsetTop;
			draw();
		}
	}
}
