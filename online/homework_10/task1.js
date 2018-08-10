function debounce(callbackFunc, delay) {
  let inDebounce;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(function () {
      callbackFunc.apply(context, args);
    }, delay);
  }
}

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'