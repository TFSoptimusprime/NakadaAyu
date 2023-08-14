const text = document.querySelector(".text");
const splitText = [...text.textContent];
text.textContent = "";
text.innerHTML = splitText.map(char => `<span>${char}</span>`).join("");

const colors = ["rgb(0, 0, 0)", "rgb(250, 250, 250)"];
let currentColorIndex = 0;

const runAnimation = () => {
	let char = 0;
	const timer = setInterval(() => {
		const span = text.querySelectorAll('span')[char];
		span.style.color = colors[currentColorIndex];
		span.classList.add('fade');
		char++;
		if (char === splitText.length) {
			complete();
			return;
		}
	}, 50);

	const complete = () => {
		clearInterval(timer);
		setTimeout(() => {
			text.style.color = colors[currentColorIndex];
			const spans = text.querySelectorAll('span');
			let i = 0;
			const timer = setInterval(() => {
				spans[i].classList.remove('fade');
				i++;
				if (i === spans.length) {
					clearInterval(timer);
					currentColorIndex = (currentColorIndex + 1) % colors.length;
					runAnimation();
				}
			}, 50);
		}, 1000);
	}
};

runAnimation();