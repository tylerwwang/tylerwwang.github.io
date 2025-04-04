/*
 * Usage: Wrap footnote text in <em></em> with class name foot-tag
 */
const footnotelist = [];

window.addEventListener("DOMContentLoaded",
	() => {
		let fn = document.getElementsByClassName('foot-tag');

		[...fn].forEach(function(el) {
			let button = document.createElement('span');
			footnotelist.push(el.innerHTML);

			button.innerHTML = `<button class="footnote-button">${footnotelist.length}</button>`;
			button.classList.add('footnote');

			el.parentNode.replaceChild(button, el);

			button.addEventListener("click", function() {
				document.getElementById(`footnote-number-${footnotelist.length}`)?.scrollIntoView({block: "center", behavior: "smooth"});
			});
		});

		if (footnotelist.length > 0) {
			let wrapper = document.getElementById('main-page-wrapper');
			let footnotes = document.createElement('ol');

			footnotes.classList.add('footnotes');

			[... footnotelist].forEach((note, i) => {
				footnotes.innerHTML += `<li id='footnote-number-${i+1}'>${note}</li>`;
			});

			wrapper.appendChild(footnotes);
		}
	}
)
