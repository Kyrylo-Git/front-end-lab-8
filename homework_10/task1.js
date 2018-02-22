
function debounce(callback, msec) {
  let timeoutId = null;
  return function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(callback, msec);
  }
}


// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
  
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 100);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();

