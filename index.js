const resize = () => {
	const box = document.querySelector('.box');
	box.style.width = window.innerWidth * .95 + "px";
	box.style.height = window.innerHeight * .95 + "px";
};

window.onload = resize;
window.addEventListener("resize", resize);