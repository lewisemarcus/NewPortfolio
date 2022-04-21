function mediaQuery(query) {
    if (query.matches) {
        document.getElementById("nav").hidden = true
    } else document.getElementById("nav").hidden = false
}
const mobileSize = window.matchMedia("(max-width: 640px)")
window.onload = function () {
    let clicked
    mediaQuery(mobileSize)

    document
        .getElementById("infoSection")
        .addEventListener("click", function () {
            document
                .getElementById("aboutText")
                .setAttribute("uk-scroll", "offset: 300")
            if (
                document.getElementById("dropbars").getAttributeNode("style")
                    .value ==
                    "height: 0px; transition-property: height; transition-duration: 200ms; transition-timing-function: linear;" ||
                document.getElementById("dropbars").getAttributeNode("style")
                    .value == "height: 0px;"
            )
                document
                    .getElementById("aboutText")
                    .setAttribute("uk-scroll", "offset: 0")
        })

    if (window.screen.width == 640)
        document
            .getElementById("projects")
            .addEventListener("click", function () {
                document
                    .getElementById("aboutText")
                    .setAttribute("uk-scroll", "offset: 300")
                document
                    .getElementById("dropbars")
                    .setAttribute(
                        "style",
                        "height: 317px; transition-property: height; transition-duration: 200ms; transition-timing-function: linear;",
                    )
                console.log(window.screen.width)
                document
                    .getElementById("entireNav")
                    .addEventListener("click", function () {
                        clicked = undefined
                    })
                document
                    .getElementById("infoSection")
                    .addEventListener("click", function () {
                        document
                            .getElementById("aboutText")
                            .setAttribute("uk-scroll", "offset: 300")
                        clicked = undefined
                    })
                document
                    .getElementById("aboutText")
                    .addEventListener("click", function () {
                        console.log(
                            document
                                .getElementById("dropbars")
                                .getAttributeNode("style").value,
                        )
                        if (
                            document
                                .getElementById("dropbars")
                                .getAttributeNode("style").value ==
                                "height: 0px; transition-property: height; transition-duration: 200ms; transition-timing-function: linear;" ||
                            document
                                .getElementById("dropbars")
                                .getAttributeNode("style").value ==
                                "height: 0px;"
                        )
                            document
                                .getElementById("aboutText")
                                .setAttribute("uk-scroll", "offset: 0")
                        if (clicked)
                            document
                                .getElementById("aboutText")
                                .setAttribute("uk-scroll", "offset: 300")
                        document
                            .getElementById("dropbars")
                            .setAttribute(
                                "style",
                                "height: 0px; transition-property: height; transition-duration: 200ms; transition-timing-function: linear;",
                            )
                        clicked = undefined
                    })
                if (clicked == undefined) clicked = true
                else if (clicked) {
                    clicked = false
                }
                if (!clicked) {
                    document
                        .getElementById("aboutText")
                        .setAttribute("uk-scroll", "offset: 0")
                    document
                        .getElementById("dropbars")
                        .setAttribute(
                            "style",
                            "height: 0px; transition-property: height; transition-duration: 200ms; transition-timing-function: linear;",
                        )
                    clicked = undefined
                }
            })
}
mobileSize.addEventListener("change", mediaQuery)
$(document).ready(function () {
    if (window.location.hash.length > 0) {
        window.scrollTo(0, $(window.location.hash).offset().top)
    }
})
