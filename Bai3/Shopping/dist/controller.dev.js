"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SanPham = function SanPham(price) {
  _classCallCheck(this, SanPham);

  this.price = price;
};

var TrangPhucNam =
/*#__PURE__*/
function (_SanPham) {
  _inherits(TrangPhucNam, _SanPham);

  function TrangPhucNam(price) {
    _classCallCheck(this, TrangPhucNam);

    return _possibleConstructorReturn(this, _getPrototypeOf(TrangPhucNam).call(this, price));
  }

  _createClass(TrangPhucNam, [{
    key: "Giam10PhanTram",
    value: function Giam10PhanTram() {
      return this.price * 0.9;
    }
  }]);

  return TrangPhucNam;
}(SanPham);

var TrangPhucNu =
/*#__PURE__*/
function (_SanPham2) {
  _inherits(TrangPhucNu, _SanPham2);

  function TrangPhucNu(price) {
    _classCallCheck(this, TrangPhucNu);

    return _possibleConstructorReturn(this, _getPrototypeOf(TrangPhucNu).call(this, price));
  }

  _createClass(TrangPhucNu, [{
    key: "Giam15PhanTram",
    value: function Giam15PhanTram() {
      return this.price * (85 / 100);
    }
  }]);

  return TrangPhucNu;
}(SanPham);

function CreateHeader() {
  var div = document.getElementById("header");
  var myStupidArray = ["ID", "CATEGORY", "DESCRIPTION", "IMAGE", "PRICE", "TITLE"];
  myStupidArray.forEach(function (element) {
    div.innerHTML += "<th>" + element + "</th>";
  });
}

function callApi() {
  fetch('https://fakestoreapi.com/products').then(function (res) {
    return res.json();
  }).then(function (json) {
    productsGenerator(json);
  });
}

function productsGenerator(array) {
  array.forEach(function (element) {
    if (element.category == "men's clothing") {
      var newPrice = new TrangPhucNam(element.price);
      newPrice = Math.round(newPrice.Giam10PhanTram());
      document.getElementById("products").innerHTML += "\n          <tr>\n                        <td>" + element.id + "</td>\n                        <td>" + element.category + "</td>\n                        <td>" + element.description + "</td>\n                        <td> <img src=\"" + element.image + "\" height=\"150\" /> </td>\n                        <td>" + element.price + "$<br> G\u1EC9am 10% c\xF2n: <br>" + newPrice + "$</td>\n                        <td>" + element.title + "</td> \n          </tr>\n        ";
    }

    if (element.category == "women's clothing") {
      var _newPrice = new TrangPhucNu(element.price);

      _newPrice = Math.round(_newPrice.Giam15PhanTram());
      document.getElementById("products").innerHTML += "\n          <tr>\n                        <td>" + element.id + "</td>\n                        <td>" + element.category + "</td>\n                        <td>" + element.description + "</td>\n                        <td> <img src=\"" + element.image + "\" height=\"150\" /> </td>\n                        <td>" + element.price + "$<br> G\u1EC9am 15% c\xF2n: <br>" + _newPrice + "$</td>\n                        <td>" + element.title + "</td>\n          </tr>\n        ";
    }

    if (element.category.includes('elec') || element.category.includes('jewelery')) {
      document.getElementById("products").innerHTML += "\n          <tr>\n                        <td>" + element.id + "</td>\n                        <td>" + element.category + "</td>\n                        <td>" + element.description + "</td>\n                        <td> <img src=\"" + element.image + "\" height=\"150\" /> </td>\n                        <td>" + element.price + "$</td>\n                        <td>" + element.title + "</td> \n          </tr>\n        ";
    }
  });
}

CreateHeader();
callApi();