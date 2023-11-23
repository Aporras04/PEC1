var url = window.location.href;
console.log(url);

var id = url.charAt(url.length - 1);
console.log(id);

if (id == 1) {
    document.getElementById("JA").style.display = "flex";
} else if (id == 2) {
    document.getElementById("CC").style.display = "flex";
} else if (id == 3) {
    document.getElementById("LK").style.display = "flex";
} else if (id == 4) {
    document.getElementById("MP").style.display = "flex";
} else if (id == 5) {
    document.getElementById("DS").style.display = "flex";
} else if (id == 6) {
    document.getElementById("ML").style.display = "flex";
}