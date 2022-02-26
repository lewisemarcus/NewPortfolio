function mediaQuery(query) {
    if (query.matches) {
        document.getElementById('nav').hidden = true
    }
    else document.getElementById('nav').hidden = false
}
const mobileSize = window.matchMedia("(max-width: 640px)")
window.onload = function () {
    let clicked
    mediaQuery(mobileSize)
    document.getElementById('projects').addEventListener("click", function () {  
        if (clicked == undefined) clicked = true
        if (clicked) {
            document.getElementById('dropbars').setAttribute('style', 'height: 317px')
            clicked = false
        }
        else if (!clicked) {
            document.getElementById('dropbars').setAttribute('style', 'height: 0px; transition-property: height; transition-duration: 200ms; transition-timing-function: linear;')
            clicked = undefined
        }
    })
}
mobileSize.addEventListener("change", mediaQuery)
$(document).ready(function () {
    if (window.location.hash.length > 0) {
        window.scrollTo(0, $(window.location.hash).offset().top);
    }
});

