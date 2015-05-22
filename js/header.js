var colours = ["#2E8AE6", "#FF5050", "#70DB70", "#FFA347", "#FF99CC", "#CC99FF"];

function circleColor() {
    /**Index**/
    if (window.location.href.indexOf("index") > -1) {
        document.getElementById("circle").style.fill = colours[0];
        document.getElementById("header-wrapper").style.borderColor = colours[0];
    } else {}

    /**Problem Sets**/
    if (window.location.href.indexOf("blog") > -1) {
        document.getElementById("circle").style.fill = colours[1];
        document.getElementById("header-wrapper").style.borderColor = colours[1];
    }
    
    /**Projects**/
    if (window.location.href.indexOf("joinus") > -1) {
        document.getElementById("circle").style.fill = colours[2];
        document.getElementById("header-wrapper").style.borderColor = colours[2];

    }

    /**About**/
    if (window.location.href.indexOf("members") > -1) {
        document.getElementById("circle").style.fill = colours[3];
        document.getElementById("header-wrapper").style.borderColor = colours[3];
    }

    /**Contact**/
    if (window.location.href.indexOf("problems") > -1) {
        document.getElementById("circle").style.fill = colours[4];
        document.getElementById("header-wrapper").style.borderColor = colours[4];
    }

    /**Forum**/
    if (window.location.href.indexOf("projects") > -1) {
        document.getElementById("circle").style.fill = colours[5];
        document.getElementById("header-wrapper").style.borderColor = colours[5];
    }
}