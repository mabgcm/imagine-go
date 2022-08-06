
const toronto = document.getElementById('toronto');
const vanc = document.getElementById('vanc');
const calg = document.getElementById('calg');
const times = document.getElementById('times');
const vegas = document.getElementById('vegas');
const venice = document.getElementById('venice');

const player = document.getElementById('player');

const url1 = '<iframe width="900" height="500" src="https://www.youtube.com/embed/'
const url2 = '?autoplay=1&modesbranding=0&clipboard-write=0&fs=1" title="YouTube video player"></iframe>'
const videoId = ['EPKWu223XEg', 'YkbAgGg6-Qs', 'xsRDTfuksyI', '1-iS7LArMPA', '4W3Xx_bErj0', 'HpZAez2oYsA']

function startVideo() {
    document.getElementById("player").innerHTML = url1 + videoId[0] + url2;
}

toronto.addEventListener('click', function (e) {
    player.innerHTML = url1 + videoId[0] + url2
});

vanc.addEventListener('click', function (e) {
    player.innerHTML = url1 + videoId[1] + url2
});

calg.addEventListener('click', function (e) {
    player.innerHTML = url1 + videoId[2] + url2
});

times.addEventListener('click', function (e) {
    player.innerHTML = url1 + videoId[3] + url2
});

vegas.addEventListener('click', function (e) {
    player.innerHTML = url1 + videoId[4] + url2
});
venice.addEventListener('click', function (e) {
    player.innerHTML = url1 + videoId[5] + url2
});






