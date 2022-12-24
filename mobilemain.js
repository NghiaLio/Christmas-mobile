let container = document.getElementById('container'); //gọi tên id
let count = 100;
for(var i = 0 ; i<100; i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50);
    let timeSnow = Math.floor((Math.random() * 5) +5);
    let blurSnow = Math.floor(Math.random() * 5);

    console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = 'blur(' + blurSnow + 'px)';

    container.appendChild(div);
}
function myFunction(){
    var checkbox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkbox.checked == true){
        text.style.transition = "1s";
        text.style.transform = "translate(-50px,-50px)";
        text.style.width = "320px";
        text.style.height = "500px";
        text.style.boxShadow = "2px 2px 2px 2px #ccc"
        document.getElementById("mail").style.display = "block"
    }
    else {
        text.style.display = 'block';
    }
}
function changedisplay (){
    document.querySelector('#letter').style.display = 'none';
    document.querySelector('#container').style.display = 'block';
    var audio = new Audio('min-x-vincom-speed-up.mp3');
    audio.play();
}
