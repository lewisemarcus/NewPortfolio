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
document.getElementById('aboutMe').addEventListener("click", function () {
    document.getElementById('aboutMe').removeAttribute('style', 'margin-top: 100px') 
})