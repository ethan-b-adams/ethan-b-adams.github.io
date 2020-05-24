function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}
var current_date = new Date();
var current_day = current_date.getDay(); //returns 0 for Sunday, 1 for Monday, etc.

if (current_day === 5) {
    document.getElementById("pan").style.display = "flex";
} else {
    document.getElementById("pan").style.display = "none";
}