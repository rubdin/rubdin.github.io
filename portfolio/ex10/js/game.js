var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');
var cCBtn = document.getElementById('cCBtn');
cCBtn.addEventListener('click',clearCanvas,false);

var dSBtn = document.getElementById('dSBtn');
dSBtn.addEventListener('click',drawSquare,false);

function drawSquare() {
    ctxBg.fillStyle = '#505050';
    ctxBg.fillRect(20,100,200,60);
}

function clearCanvas(){
    ctxBg.clearRect(20,100,800,500);
}
