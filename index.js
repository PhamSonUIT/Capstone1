// Bấm vào nút Dark 


var btnLight = document.getElementById("btnLight");
btnLight.onclick = function () {
    var body = document.getElementById("body");
    body.classList.toggle("dark");
}


