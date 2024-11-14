window.addEventListener('DOMContentLoaded', ()=>{
		const button = document.querySelector('#okayButton')
		const greetingsForTheCurious = document.querySelector('#greetingsForTheCurious')

		button.addEventListener('click', (e) => {
			e.preventDefault();
			console.log('clicked')
			greetingsForTheCurious.classList.toggle('hidden')
		})




})