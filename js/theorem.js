function getFirstChild(el){
  var firstChild = el.firstChild;
  while(firstChild != null && firstChild.nodeType == 3){ // skip TextNodes
    firstChild = firstChild.nextSibling;
  }
  return firstChild;
}
function getLastChild(el){
  var firstChild = el.lastChild;
  while(firstChild != null && firstChild.nodeType == 3){ // skip TextNodes
    firstChild = firstChild.previousSibling;
  }
  return firstChild;
}

/*
 * Usage: Wrap theorem text in <blockquote></blockquote> with id set as reference lable and class as type of theorem.
 */

window.addEventListener("DOMContentLoaded",
	() => {
		//creating environments.
		let thms = document.getElementsByClassName('thm');
		let cors = document.getElementsByClassName('cor');
		let lemmas = document.getElementsByClassName('lem');
		let props = document.getElementsByClassName('prop');
		let defs = document.getElementsByClassName('def');

		let ex = document.getElementsByClassName('ex');

		let references = {};

		[...thms].forEach(function (value, i){
			let text = value.innerHTML;

			value.classList.add("math-env");

			if(value.id) {
				references[value.id] = i+1;
			}

			value.innerHTML = `
				<h5>Theorem ${i+1}.</h5>
				<div class="math-env-text">${text}</div>
			`
		});

		[...cors].forEach(function (value, i){
			let text = value.innerHTML;

			value.classList.add("math-env");

			if(value.id) {
				references[value.id] = i+1;
			}

			value.innerHTML = `
				<h5>Corollary ${i+1}.</h5>
				<div class="math-env-text">${text}</div>
			`
		});

		[...lemmas].forEach(function (value, i){
			let text = value.innerHTML;

			value.classList.add("math-env");

			if(value.id) {
				references[value.id] = i+1;
			}

			value.innerHTML = `
				<h5>Lemma ${i+1}.</h5>
				<div class="math-env-text">${text}</div>
			`
		});

		[...props].forEach(function (value, i){
			let text = value.innerHTML;

			value.classList.add("math-env");

			if(value.id) {
				references[value.id] = i+1;
			}

			value.innerHTML = `
				<h5>Proposition ${i+1}.</h5>
				<div class="math-env-text">${text}</div>
			`
		});

		[...defs].forEach(function (value, i){
			let text = value.innerHTML;

			value.classList.add("math-env");

			if(value.id) {
				references[value.id] = i+1;
			}

			value.innerHTML = `
				<h5>Definition ${i+1}.</h5>
				<div class="math-env-text">${text}</div>
			`
		});

		[...ex].forEach(function (value, i){
			let text = value.innerHTML;

			value.classList.add("math-env");

			if(value.id) {
				references[value.id] = i+1;
			}

			value.innerHTML = `
				<h5>Example ${i+1}.</h5>
				<div class="math-env-text">${text}</div>
			`
		});

		//creating proofs
		let proofs = document.getElementsByClassName('proof');

		[...proofs].forEach(function (value) {
			let proof = document.createElement('p');

			proof.innerHTML = value.innerHTML;
			proof.classList.add("math-env-proof");

			value.parentNode.replaceChild(proof, value);

			let firstchild = getFirstChild(proof);
			firstchild.innerHTML = `<em>Proof.</em>
				${firstchild.innerHTML}`;

			let lastchild = getLastChild(proof);
			lastchild.innerHTML += "&#8196;";
		});

		/*
		 * Usage: Wrap type theorem referencing in <a></a> with href set as theorem label to be referenced
		 * with class name ref.
		 */
		//generating references
		let refs = document.getElementsByClassName('ref');

		[...refs].forEach(function(ref) {
			let button = document.createElement('span');
			let type = ref.innerHTML;
			let id = ref.href.substring(ref.href.lastIndexOf('#') + 1);

			button.innerHTML = `${type} <button class="math-ref-link">${references[id]}</button>`;
			button.classList.add('math-ref');

			ref.parentNode.replaceChild(button, ref);


			button.addEventListener("click", function() {
				document.getElementById(id)?.scrollIntoView({block: "center", behavior: "smooth"});
			})
		});
	});
