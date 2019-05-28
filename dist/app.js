"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var add = function add(a, b) {
  return a + b;
};

console.log(add(2, 3));

var Car =
/*#__PURE__*/
function () {
  function Car() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    _classCallCheck(this, Car);

    this.value = value;
  }

  _createClass(Car, [{
    key: "showValue",
    value: function showValue() {
      console.log(this.value);
    }
  }]);

  return Car;
}();

var mustang = new Car(10000);