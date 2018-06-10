'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var praiseButton = function () {
    function praiseButton(num, el) {
        _classCallCheck(this, praiseButton);

        this.num = num;
        this.el = el;
    }

    _createClass(praiseButton, [{
        key: 'clickAction',
        value: function clickAction() {
            var _this = this;

            this.el.click(function (num, el) {
                if (_this.num < 10) {
                    _this.num++;
                    _this.el.removeClass('off');
                    $('.count').text("点赞次数为" + _this.num + "次");
                } else {
                    _this.num = 0;
                    _this.el.addClass('off');
                    $('.count').text("点赞次数为0次");
                }
            });
        }
    }]);

    return praiseButton;
}();

var Thumb = function (_praiseButton) {
    _inherits(Thumb, _praiseButton);

    function Thumb(num, el) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, el));
    }

    return Thumb;
}(praiseButton);

exports.default = Thumb;
