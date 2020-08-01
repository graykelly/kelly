document.addEventListener("scroll", () => {
    var nav = document.getElementsByClassName("nav")[0];
    var cnt = document.getElementsByClassName("container")[0];
    var bars = document.getElementsByClassName("menu-bars")[0].getElementsByTagName("div");
    if (window.scrollY >= window.innerHeight / 2 - 55) {
        nav.style.background = "#fff";
        nav.style.color = "#000";
        nav.style.boxShadow = "0 1px 3px #0009";
        for (var i = 0; i <= bars.length - 1; i++) {
            bars[i].style.background = "#000";
        }
    } else {
        nav.style.background = "transparent";
        nav.style.color = "#fff";
        nav.style.boxShadow = "";
        for (var i = 0; i <= bars.length - 1; i++) {
            bars[i].style.background = "#fff";
        }
    }
    var offset = window.pageYOffset;
    cnt.style.backgroundPositionY = Math.round(offset) * 0.7 + "px";


});

window.addEventListener("load", () => {
    var bars = document.getElementsByClassName("menu-bars")[0];
    var spans = document.getElementsByClassName("cnt-text")[0].getElementsByTagName("span");
    var n = 0;
    setInterval(function () {
        if (n <= 2) {
            for (var i = 0; i <= 2; i++) {
                spans[i].style.color = "#fff";
            }
            spans[n].style.color = "#fff5";
            n++
        } else {
            n = 0;
            for (var i = 0; i <= 2; i++) {
                spans[i].style.color = "#fff";
            }
            spans[n].style.color = "#fff5";
        }
    }, 500);

    var c = false;
    bars.addEventListener("click", () => {
        var bars2 = bars.getElementsByTagName("div");
        var mc = document.getElementsByClassName("menu-cnt")[0];
        if (c === false) {
            bars2[2].style.width = "25px";
            bars2[2].style.transform = "rotate(45deg)";
            bars2[0].style.transform = "rotate(-45deg)";
            bars2[1].style.width = "0";
            bars2[1].style.height = "0";
            bars2[1].style.margin = "0";
            mc.style.transform = "scale(1)";
            mc.style.background = "#0009";
            document.body.style.overflow = "hidden";
            c = !c
        } else {
            bars2[2].style.width = "15px";
            bars2[2].style.transform = "rotate(0)";
            bars2[0].style.transform = "rotate(0)";
            bars2[1].style.width = "20px";
            bars2[1].style.height = "2px";
            bars2[1].style.margin = "4px 0";
            mc.style.transform = "scale(0)";
            mc.style.background = "#0000";
            document.body.style.overflow = "scroll";
            c = !c
        }
    })
})

function sub(e) {
    e.preventDefault()
}