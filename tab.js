const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");

// textareas
const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");

htmlCode.style.width = "100%"
html.style.borderBottom = "1.5px solid royalblue"
css.style.borderBottom = "none"
js.style.borderBottom = "none"
cssCode.style.display = "none"
jsCode.style.display = "none"


html.addEventListener('click', () => {
  if (htmlCode.style.width === "100%") {
    htmlCode.style.width = "100%";
    html.style.borderBottom = "1.5px solid royalblue"
    css.style.borderBottom = "none"
    js.style.borderBottom = "none"
  } else {
    htmlCode.style.display = "block";
    htmlCode.style.width = "100%";
    html.style.borderBottom = "1.5px solid royalblue"
    css.style.borderBottom = "none"
    cssCode.style.display = "none";
    cssCode.style.width = "0%"
    js.style.borderBottom = "none"
    jsCode.style.display = "none";
    jsCode.style.width = "0%"
  }
});

css.addEventListener('click', () => {
  if (cssCode.style.width === "100%") {
    cssCode.style.width = "100%";
    css.style.borderBottom = "1.5px solid royalblue"
    html.style.borderBottom = "none"
    js.style.borderBottom = "none"
  } else {
    cssCode.style.display = "block";
    cssCode.style.width = "100%";
    css.style.borderBottom = "1.5px solid royalblue"
    html.style.borderBottom = "none"
    htmlCode.style.display = "none";
    htmlCode.style.width = "0%";
    js.style.borderBottom = "none"
    jsCode.style.display = "none";
    jsCode.style.width = "0%"
  }
});

js.addEventListener('click', () => {
  if (jsCode.style.width === "100%") {
    jsCode.style.width = "100%";
    js.style.borderBottom = "1.5px solid royalblue"
    html.style.borderBottom = "none"
    css.style.borderBottom = "none"
  } else {
    jsCode.style.display = "block";
    jsCode.style.width = "100%";
    js.style.borderBottom = "1.5px solid royalblue"
    css.style.borderBottom = "none"
    cssCode.style.display = "none";
    cssCode.style.width = "0%";
    html.style.borderBottom = "none"
    htmlCode.style.display = "none";
    htmlCode.style.width = "0%";
  }
});
