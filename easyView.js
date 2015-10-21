var mainWindow = document.querySelector(".mainWindow");
var cachedItems = document.querySelector(".cachedItems");
var impactElements = Array.prototype.slice.call(document.querySelector(".impactElements").children);
var count = null;
var tmpEl = 0;

var preview = function () {
  count = impactElements.indexOf(this);

  if ( count === tmpEl ) return;

  tmpEl = count;

  if (mainWindow.children) {
    mainWindow.removeChild(mainWindow.firstElementChild);
  }
  mainWindow.appendChild(cachedItems.children[count].cloneNode(true));
};

for (var i = 0; i < impactElements.length; i++) {
  impactElements[i].onmouseover = preview;
}