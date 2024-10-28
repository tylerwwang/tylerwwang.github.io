
function generateGallery(album, production, id, photopath, url) {
	$.getJSON(album, (file) => {
		let albumOuter = document.getElementById(id);

		albumOuter.innerHTML = `<h2>${file.album_title}</h2>`;
		albumOuter.innerHTML += `<div class="photo-gallery-album-inner" id="inner-${id}"></div>`;

		let albumDiv = document.getElementById(`inner-${id}`)

		let imagesNames = Object.keys(file.images);

		for (let i = 0; i < imagesNames.length; i++) {
			let filename = file.images[imagesNames[i]]?.ext ?
				imagesNames[i] + "." +file.images[imagesNames[i]].ext : imagesNames[i] + ".jpg";
			let path = album.substring(0, album.lastIndexOf("/"));
			let dev = `<img src="${path}/${filename}" width="500"/>`;
			let prod =
				`<img src="//images.weserv.nl/?url=${url}${path}/${filename}&w=500&output=jpg&q=50" alt="${filename}" />`;

			albumDiv.innerHTML += `
				<a href="${photopath}?photo=${path}/${filename}" class="no-lightbox">
				${production ? prod : dev}
</a>
			`
		}
	});
}
