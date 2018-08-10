var fs = require('fs');

function run(generator) {
  var it = generator(go);

  function go(error, result) {
    if(error) {
      return it.throw(error);
    }
    it.next(result);
  }

  go();
}

run(function* (done) {
  var file;

  try {
    var files = yield fs.readdir('NoNoNo', done);
    file = files[0];
  } catch (e) {
    file = null;
  }
  console.log(file);
});