

const bubble = () => {
	let count = 300;

	const container = document.querySelector('.container');
	const section = document.querySelector('.section');
	let i = 0;

	console.log(container.clientWidth)
	while(i<count){
		let bubble = document.createElement('i');



		let x = Math.floor(Math.random() * container.clientWidth);
		let y = Math.floor(Math.random() * container.clientHeight);

		let size = Math.random() * 10;

		bubble.style.left = x + 'px';
		bubble.style.top = y + 'px';


		bubble.style.width = 3 + size + 'px';
		bubble.style.height = 3 + size + 'px';


		bubble.style.animationDuration = 5 + size + 's';
		bubble.style.animationDelay = 0 + 's';


		section.appendChild(bubble);

		i++;
	}

	// setInterval( () => {
	// 	container.classList.toggle("red-bg");
	// },5000)
}



const box_img = document.querySelector('.gift-box-img')
const box_img_gif = document.querySelector('.gift-box-img-gif');
const frame_box = document.querySelector('.frame-box');

document.addEventListener("load", bubble())


box_img.addEventListener('click',function(e){
	e.target.style.cssText = "visibility: hidden;opacity: 0;position: absolute;display: none";

	box_img_gif.style.cssText = 'visibility: visible;opacity: 1;position: unset';

	setTimeout(()=>{
		box_img_gif.style = "display:none";
		frame_box.style = "visibility: visible;opacity: 1;position: unset"
		frame_box.classList.add('animate','infinite',frame_box.dataset.ani)
	},6000)

	console.log(e)
})