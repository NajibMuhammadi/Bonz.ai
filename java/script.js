window.addEventListener("scroll", updateHeaderColor);
window.addEventListener("resize", updateHeaderColor);

function updateHeaderColor() {
    var scrollPosition = window.scrollY;
    var windowWidth = window.innerWidth;
    var header = document.querySelector(".header");

    if (windowWidth < 1024) {
        header.style.backgroundColor = "black";
    } else {
        if (scrollPosition > 1) {
            header.style.backgroundColor = "black";
        } else {
            header.style.backgroundColor = "transparent";
        }
    }
}
/* Onclick */
document.getElementById("searchButton").addEventListener("click", function () {
    window.location.href = "#about__grid";
});

function showAlert() {
    alert('Booking confirmed!');
}
