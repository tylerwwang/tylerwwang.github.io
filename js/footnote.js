/*
 * Usage: Wrap footnote text in <em></em> with class name foot-tag
 */
const footnotelist = [];

window.addEventListener("DOMContentLoaded",
	() => {
		let fn = document.getElementsByClassName('foot-tag');

		if(fn.length == 0) {
			document.getElementById("footnote-box").remove();
			return;
		}

		[...fn].forEach(function(el) {
			let button = document.createElement('span');
			let index = footnotelist.length + 1;

			footnotelist.push(el.innerHTML);

			button.innerHTML = `<button class="footnote-button">${index}</button>`;
			button.classList.add('footnote');
			button.id = `footnote-tag-number-${index}`;

			el.parentNode.replaceChild(button, el);

			button.addEventListener("click", function() {
				let footnote = document.getElementById(`footnote-number-${index}`);

				footnote?.scrollIntoView({block: "center", behavior: "smooth"});

				footnote.classList.remove("footnote-animate");
				void footnote.offsetWidth;
				footnote.classList.add("footnote-animate");
			});
		});

		if (footnotelist.length > 0) {
			let box = document.getElementById('footnote-box');
			let footnotes = document.createElement('ol');

			box.innerHTML = "";

			footnotes.classList.add('footnotes');

			[... footnotelist].forEach((note, i) => {
				let item = document.createElement('li');
				item.id = `footnote-number-${i+1}`;
				item.innerHTML = `<span id="footnote-number-${i+1}-span">${note}</span>&nbsp`;
				footnotes.appendChild(item);

				let button = document.createElement('button');
				button.classList.add('footnote-back-button');
				button.innerHTML = "&#8617;";
				button.addEventListener("click", function() {
					let footnoteTag = document.getElementById(`footnote-tag-number-${i+1}`);

					footnoteTag?.scrollIntoView({block: "center", behavior: "smooth"});

					footnoteTag.classList.remove("footnote-tag-animate");
					void footnoteTag.offsetWidth;
					footnoteTag.classList.add("footnote-tag-animate");
				});

				item.appendChild(button);
			});

			box.appendChild(footnotes);
		}
	}
)
