/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main() {
	// const root = document.getElementById('root');
	const btn = document.getElementById('btn');
	const btn2 = document.getElementById('btn2');
	const btn3 = document.getElementById('btn3');

	btn.addEventListener('click', function () {
		const bgColor = generateRGBColor();
		btn.style.backgroundColor = bgColor;
		
	});
	btn2.addEventListener('click', function () {
		const bgColor = generateRGBColor();
		btn2.style.backgroundColor = bgColor;
		
	});
	btn3.addEventListener('click', function () {
		const bgColor = generateRGBColor();
		btn3.style.backgroundColor = bgColor;
		
	});
}

// step 2 - random color generator function
function generateRGBColor() {
	// rgb(0, 0, 0), rgb(255, 255, 255)
	const red = Math.floor(Math.random() * 205);
	const green = Math.floor(Math.random() *300);
	const blue = Math.floor(Math.random() * 155);

	return `rgb(${red}, ${green}, ${blue})`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event