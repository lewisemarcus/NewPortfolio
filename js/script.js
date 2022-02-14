function mediaQuery(query) {
    if (query.matches) {
        document.getElementById('nav').hidden = true
    }
    else document.getElementById('nav').hidden = false
}
const mobileSize = window.matchMedia("(max-width: 640px)")
window.onload = function () {
    mediaQuery(mobileSize)
}
mobileSize.addEventListener("change", mediaQuery)
$(document).ready(function() {
    if(window.location.hash.length > 0) {
        window.scrollTo(0, $(window.location.hash).offset().top);
    }
});