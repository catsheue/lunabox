"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Box;

var _react = _interopRequireDefault(require("react"));

require("./Box.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Box(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Luna is cute.' : _ref$text;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box__inner"
  }, text));
}

//# sourceMappingURL=Box.react.js.map