(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } finally { document.body.removeChild(area); }
    return Promise.resolve();
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-copy") || "";
      copyText(value).then(function () {
        var previous = btn.textContent;
        btn.textContent = "Copied";
        btn.setAttribute("data-copied", "1");
        window.setTimeout(function () {
          btn.textContent = previous;
          btn.removeAttribute("data-copied");
        }, 1600);
      });
    });
  });
})();
