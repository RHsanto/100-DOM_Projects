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
	 const root = document.getElementById('root');
	 root.addEventListener('click', function () {
		const bgColor = generateRGBColor();
		root.style.backgroundColor = bgColor;
		
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

 const array = [];
 array[5]=6;
 array[50]=60;
 array[99]=100;
 array[150]=166;

 console.log(array.length);
console.log(array);
 
