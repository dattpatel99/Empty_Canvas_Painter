
window.onload = init();

var canvas, // For the canas element
	ctx, // For canvas get 2d
	draw_flag = false, // Can user draw or not
	prevX = 0, // The last x loc
	currX = 0, // The last y loc
	prevY = 0, // The curr x loc
	currY = 0, // The curr y loc
	dot_flag = false; // For dot

var color = "black",
	thickness = 2;

function changeCanvasSize() {

}

function init() {
	canvas = document.getElementById("can");
	ctx = canvas.getContext("2d");
	width = canvas.width;
	height = canvas.height;

	// Event listeners on canvas
	document.getElementById("can").addEventListener("mousedown", mouseDownFuc);
	document.getElementById("can").addEventListener("mousemove", move);

	document.getElementById("can").addEventListener("mouseup", disableFlag);

	document.getElementById("can").addEventListener("mouseout", disableFlag);

	window.addEventListener('resize', resizeCanvas, false);
	// Draw canvas border for the first time.
	resizeCanvas();
}

// For changing colors
function changeColor(elemID) {
	switch (elemID) {
		case "red":
			color = "red";
			break;
		case "blue":
			color = "blue";
			break;
		case "white":
			color = "white";
			thickness = 20; // Makes the line thicker so it acts as a large eraser
			break;
		case "green":
			color = "green";
			break;
		default:
			color = "black";
			break;
	}
}

// What to do when mouse is down
function mouseDownFuc(event) {
	draw_flag = true;
	dot_flag = true;

	// Basically subtracts the size of canvas from screen, from the event click position to remove the extra border error
	currX = event.clientX - canvas.offsetLeft;;
	currY = event.clientY - canvas.offsetTop;


	if (dot_flag) {
		ctx.beginPath();
		ctx.moveTo(currX, currY);
		ctx.strokeStyle = color;
		ctx.fillRect(currX, currY, 2, 2); // Creates a very tiny pixel 
		ctx.closePath();
		dot_flag = false;
	}
}

// What to do when mouse is moved
function move(event) {
	if (draw_flag) {
		prevX = currX;
		prevY = currY;

		// Basically subtracts the size of canvas from screen, from the event click position to remove the extra border error
		currX = event.clientX - canvas.offsetLeft;
		currY = event.clientY - canvas.offsetTop;

		ctx.beginPath(); // Starts from new path
		ctx.moveTo(prevX, prevY); // Moves to the previous position 
		ctx.lineTo(currX, currY); // Creates a line from previous position to this position

		// The lines descriptive features
		ctx.strokeStyle = color;
		ctx.lineWidth = thickness;

		// Makes the stroke
		ctx.stroke();

		// Closes the path
		ctx.closePath();
	}
}

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

// Disables flag when mouse is out or mouse is up
function disableFlag(event) {
	draw_flag = false;
}
