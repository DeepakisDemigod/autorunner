function addToLocalStorage() {
  let html = document.getElementById('html-code').value
  let css = document.getElementById('css-code').value
  let js = document.getElementById('js-code').value
  localStorage.setItem('html', html)
  localStorage.setItem('css', css)
  localStorage.setItem('js', js)
  
}


window.addEventListener("load", function() {
  let storedHTML = localStorage.getItem("html");
  let storedCSS = localStorage.getItem("css");
  let storedJS = localStorage.getItem("js");

  if (storedHTML) {
    document.getElementById("html-code").value = storedHTML;
  }
  if (storedCSS) {
    document.getElementById("css-code").value = storedCSS;
  }
  if (storedJS) {
    document.getElementById("js-code").value = storedJS;
  }
});

