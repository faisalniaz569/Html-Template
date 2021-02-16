var document;

// Overlay fullwidth SearchBox
function openSearch() {
    "use strict";
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    "use strict";
    document.getElementById("myOverlay").style.display = "none";
}

// Accordion script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i += 1) {
    acc[i].addEventListener("click", function () {
        "use strict";
        this.classList.toggle("accactive");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
