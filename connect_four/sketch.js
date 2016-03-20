var boardCircle = {
	size: 80
};

function setup() {
	createCanvas(1000, 700);
}

function draw() {
	background(255);
	drawChips();
	drawBoard();

}

function drawChips() {
	// player 1
	push();
	fill(255, 0, 0);
	noStroke();
	ellipse(100, 100, 70, 70);
	pop();

	// player 1
	push();
	fill(0, 255, 0);
	noStroke();
	ellipse(180, 170, 70, 70);
	pop();
}

function drawBoard() {

	//outer border
	fill(255, 255, 255, 0);
	strokeWeight(boardCircle.size / 3);
	rect(50, 50, 7 * boardCircle.size + 10, 6 * boardCircle.size + 10, 30);

	for (var x = 0; x < 6; x++) {
		for (var y = 0; y < 7; y++) {
			push();
			stroke(0);
			strokeWeight(boardCircle.size / 3);
			ellipse(100 + y * (boardCircle.size + 0), 100 + x * (boardCircle.size + 0),
				boardCircle.size, boardCircle.size);

			fill(255, 0, 0);
			noStroke();
			// rect(140 + x * (boardCircle.size + 0), 140 + y * (boardCircle.size + 0), 5,
			// 	5);
			rect(140, 100 - (2 * (boardCircle.size / 3)), 20, 6 * boardCircle.size +
				(boardCircle.size / 3) + 10);
			pop();
		}
	}
}
