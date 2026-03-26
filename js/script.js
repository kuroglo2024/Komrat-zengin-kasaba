function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

function toggleLangMenu() {
    document.getElementById("langDropdown").classList.toggle("show");
}

window.addEventListener("click", function (e) {
    if (!e.target.closest(".language-switcher")) {
        document.getElementById("langDropdown").classList.remove("show");
    }
});