var random_images_array = ["img/booklet01.jpg", "img/couch.jpg", "img/ivotv.jpg", "img/gomorraposter.jpg", "img/booklet02.jpg", "img/gomorratv.jpg", "img/goofellasposter.jpg", "img/uccidetv.jpg", "img/uccide.jpg"];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}
