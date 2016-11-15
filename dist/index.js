'use strict';

var docRect = document.documentElement.getBoundingClientRect();
var fullWidth = docRect.width;
var fullHeight = docRect.height;

var mouse$ = Rx.Observable.fromEvent(document.querySelector('body'), 'mousemove').map(function (_ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
  return {
    x: offsetX,
    y: offsetY
  };
});

RxCSS({
  mouse: mouse$.map(function (_ref2) {
    var x = _ref2.x,
        y = _ref2.y;
    return {
      x: x / fullWidth,
      y: y / fullWidth
    };
  })
});