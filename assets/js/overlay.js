window.onload = function() {
    if (window.location.hash !== "#verify") {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("id", "gateway");
        iframe.style.position = "fixed";
        iframe.style.opacity = "1";
        iframe.style.transition = "0.2s opacity";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.src = "http://phils-mbp.lan:5757/overlay.html";
        document.body.appendChild(iframe);
    }
};
