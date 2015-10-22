"use strict";

function Slider(impactElements, cachedItems, mainWindow) {
  this.impactElements = impactElements;
  this.cachedItems = cachedItems;
  this.mainWindow = mainWindow;
  this.count = null;
  this.tmpEl = 0;
}

Slider.prototype.bindEvents = function () {
  for (var i=0; i < this.impactElements.length; i++) {  
    var _this = this; 
    this.impactElements[i].onmouseover = function () {
      _this.count = _this.impactElements.indexOf(this);
      
      if ( _this.count === _this.tmpEl ) return;
      _this.tmpEl = _this.count;
      
      _this.mainWindow.removeChild(_this.mainWindow.firstElementChild);
      _this.mainWindow.appendChild(_this.cachedItems.children[_this.count].cloneNode(true));
    }
  }
}

var slider = [];

for (var i = 0; i < document.getElementsByClassName('easyView').length; i++) {
  var current = document.getElementsByClassName('easyView')[i];
  slider[i] = new Slider(
                          Array.prototype.slice.call(current.querySelector(".impactElements").children), 
                          current.querySelector(".cachedItems"), 
                          current.querySelector(".mainWindow")
                        );
  
  slider[i].bindEvents();
}