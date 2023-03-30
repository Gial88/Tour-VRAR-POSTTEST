var container = document.querySelector('#container');
var panorama1 = new PANOLENS.ImagePanorama('images/images1.jpg');
var panorama2 = new PANOLENS.ImagePanorama('images/images2.jpg');
var panorama3 = new PANOLENS.ImagePanorama('images/images3.jpg');
var panorama4 = new PANOLENS.ImagePanorama('images/images4.jpg');
var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama1, panorama2, panorama3, panorama4);

var bar = document.querySelector('#bar');
function onProgressUpdate(event) {
    var percentage = event.progress.loaded / event.progress.total * 100; 
    bar.style.width = percentage + "%";
    if (percentage >= 100) {
        bar.classList.add('hide'); 
        setTimeout(function () {
            bar.style.width = 0;
        }, 1000);
    }
}

var textureLoader = new THREE.TextureLoader();
var customInfospot = textureLoader.load('images/images1.jpg', function () {
    var infospot = new PANOLENS.Infospot(500, 'images/images2.jpg');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function () {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama2);
    });
    panorama1.add(infospot);
});

var textureLoader2 = new THREE.TextureLoader();
var customInfospot2 = textureLoader.load('images/images2.jpg', function () {
    var infospot = new PANOLENS.Infospot(500, 'images/images3.jpg');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function () {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama3);
    });
    panorama2.add(infospot);
});

var textureLoader3 = new THREE.TextureLoader();
var customInfospot3 = textureLoader.load('images/images3.jpg', function () {
    var infospot = new PANOLENS.Infospot(500, 'images/images4.jpg');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function () {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama4);
    });
    panorama3.add(infospot);
});

var textureLoader4 = new THREE.TextureLoader();
var customInfospot4 = textureLoader.load('images/images4.jpg', function () {
    var infospot = new PANOLENS.Infospot(500, 'images/images2.jpg');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function () {
        bar.classList.remove('hide');
        viewer.setPanorama(panorama1);
    });
    panorama4.add(infospot);
});

panorama1.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);
panorama4.addEventListener('progress', onProgressUpdate);