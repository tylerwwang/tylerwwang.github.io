window.addEventListener("DOMContentLoaded",
	() => {
		let fn = document.getElementsByClassName('footnote');
		let revFn = document.getElementsByClassName('reversefootnote');

		[...fn].forEach(function(el) {
			let button = document.createElement('span');
			let id = el.href.substring(el.href.lastIndexOf('#') + 1);

			button.innerHTML = `<button class="footnote-button">${el.innerHTML}</button>`;
			button.classList.add('footnote');

			el.parentNode.replaceChild(button, el);


			button.addEventListener("click", function() {
				document.getElementById(id)?.scrollIntoView({block: "center", behavior: "smooth"});
			})
		});

		[...revFn].forEach(function(el) {
			let button = document.createElement('span');
			let id = el.href.substring(el.href.lastIndexOf('#') + 1);

			button.innerHTML = `<button class="footnote-button">${el.innerHTML}</button>`;
			button.classList.add('reversefootnote');

			el.parentNode.replaceChild(button, el);


			button.addEventListener("click", function() {
				document.getElementById(id)?.scrollIntoView({block: "center", behavior: "smooth"});
			})
		});
	}
)
