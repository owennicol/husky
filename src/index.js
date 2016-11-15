const docRect = document.documentElement.getBoundingClientRect();
const fullWidth = docRect.width;
const fullHeight = docRect.height;

const mouse$ = Rx.Observable.fromEvent(
  document.querySelector('body'), 'mousemove')
  .map(({offsetX, offsetY}) => ({
    x: offsetX,
    y: offsetY
  }));

RxCSS({
  mouse: mouse$
    .map(({x,y}) => ({
      x: x / fullWidth,
      y: y / fullWidth,
    }))
})
