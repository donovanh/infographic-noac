function loadSvg(selector, svgname, url, cb) {
  var target = document.querySelector(selector);

  // If SVG is supported
  if (typeof SVGRect != "undefined") {
    // Request the SVG file
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "./images/" + svgname + ".svg", true);
    ajax.send();

    // Append the SVG to the target
    ajax.onload = function(e) {
      target.innerHTML = ajax.responseText;
      if (cb) cb();
    }
  } else {
    // Fallback to png
    target.innerHTML = "<img src='./images/" + url + ".png' />";
  }
}