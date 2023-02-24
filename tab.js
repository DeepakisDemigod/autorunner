const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");

// textareas
const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");

htmlCode.style.width = "100%"
cssCode.style.display = "none"
jsCode.style.display = "none"

html.addEventListener('click', () => {
  if (htmlCode.style.width === "100%") {
    htmlCode.style.width = "100%";
  } else {
    htmlCode.style.display = "block";
    htmlCode.style.width = "100%";
    cssCode.style.display = "none";
    cssCode.style.width = "0%"
    jsCode.style.display = "none";
    jsCode.style.width = "0%"
  }
});

css.addEventListener('click', () => {
  if (cssCode.style.width === "100%") {
    cssCode.style.width = "100%";
  } else {
    cssCode.style.display = "block";
    cssCode.style.width = "100%";
    htmlCode.style.display = "none";
    htmlCode.style.width = "0%";
    jsCode.style.display = "none";
    jsCode.style.width = "0%"
  }
});

js.addEventListener('click', () => {
  if (jsCode.style.width === "100%") {
    jsCode.style.width = "100%";
  } else {
    jsCode.style.display = "block";
    jsCode.style.width = "100%";
    cssCode.style.display = "none";
    cssCode.style.width = "0%";
    htmlCode.style.display = "none";
    htmlCode.style.width = "0%";
  }
});
