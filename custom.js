

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


// Text Animation

let texts_greeting = [
	'You Know!!!',
	'It\'s a special day for me...',
	'It\'s because on this day...',
	'I got my Bestest GIFT of my life...',
	'So, Here is a little gift...',
	'Only For You...',
	'To get just Tab The BOX below...'
]

const text_changing_h3 = document.querySelector('.text-changing-h3')

// const change_texts = (texts,i=0) => {
// 	if(i < texts.length){
// 		text_changing_h3.innerHTML = texts[i];
// 	}
// }

let j = 0;



setInterval( () => {
	let new_text = '', i = 0;
	if(j < texts_greeting.length){
		type_the_text(texts_greeting[j],i, new_text)
		j++
	}
	
}, 6000 )


const type_the_text = (text,i, new_text) => {
	if( i < text.length ){
		setInterval(() => {
			new_text += text[i]
			if(text[i] != undefined){
				text_changing_h3.innerHTML = new_text;
			}
			i++;
		},200)
	}
}


// Play The music....

// window.onload = function(){
// 	document.getElementById('play_bg_music').mute = true;
// 	document.getElementById('play_bg_music').autoplay = true;

	
// }

// const audio = document.createElement("audio");
//   audio.muted = true;

//   function play(src) {
//     audio.pause();
//     audio.muted = false;
//     const source = document.createElement("source");
//     source.src = src;
//     audio.appendChild(source);
//     audio.currentTime = 0;
//     audio.play();
//   }

// window.onmouseover = function(){play('music/river_flow.mp3')};