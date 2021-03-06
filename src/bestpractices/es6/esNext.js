'use strict';

// command babel-cli : babel app.js -o es6.js

// Xmas tree code below
// asyncMethod('Open DB connection', function () {
//   asyncMethod('Find User', function () {
//     asyncMethod('Validate User', function () {
//       asyncMethod('do something', function () { });
//     })
//   });
// });

// Using promises was :
// asyncMethod('Open DB connection')
//     .then(findUser) // could do .then(findUser, error) in case promise reject
//     .then(validateUser)
//     .then(doStuff)
//     .then(function () { });

let main = (() => {
  var _ref = _asyncToGenerator(function* () {

    var one = yield asyncMethod('Open DB connection', 0);
    var two = yield asyncMethod('Find User', one);
    var three = yield asyncMethod('Validate User', two);
    var four = yield asyncMethod('do something', three);
  });

  return function main() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function asyncMethod(message, num) {
  return new Promise(function (fulfill, reject) {

    setTimeout(function () {
      console.log(message + ' ' + num);
      fulfill(num + 1);
    }, 500);
  });
}

main();
