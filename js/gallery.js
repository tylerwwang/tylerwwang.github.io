
function generateGallery(album, production, id, photopath, url, imagePath, albumlink = true) {
	$.getJSON(album, (file) => {
		let albumOuter = document.getElementById(id);

		albumOuter.innerHTML = albumlink ? `<h2>
			<a href="${url}/album?album=${imagePath}" class="gallery-album-link">
			${file.album_title}<a></h2>`: ``;
		albumOuter.innerHTML += `<div class="photo-gallery-album-inner" id="inner-${id}"></div>`;

		let albumDiv = document.getElementById(`inner-${id}`)

		let imagesNames = Object.keys(file.images);

		for (let i = 0; i < imagesNames.length; i++) {
			let filename = file.images[imagesNames[i]]?.ext ?
				imagesNames[i] + "." +file.images[imagesNames[i]].ext : imagesNames[i] + ".jpg";
			let dev = `<img src="${imagePath}/${filename}" width="500"/>`;
			let prod =
				`<img src="//images.weserv.nl/?url=${url}${imagePath}/${filename}&w=500&output=jpg&q=90" alt="${filename}" />`;

			albumDiv.innerHTML += `
				<a href="${photopath}?photo=${imagePath}/${filename}" class="no-lightbox">
				${production ? prod : dev}
</a>
			`
		}
	});
}
