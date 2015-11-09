(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Test = _interopRequire(require("./test"));

var App = function App() {
    _classCallCheck(this, App);

    Test.test();

    $(".figure-set").each(function (i, figureSet) {
        $(figureSet).find("figure:not(:first)").addClass("collapse");
        $(figureSet).find(".previous").click(function (i, previous) {
            var $prev = $(figureSet).find("figure:not(.collapse)").prev("figure");
            if (!$prev || !$prev.length) {
                $prev = $(figureSet).find("figure").last();
            }
            $(figureSet).find("figure:not(.collapse)").addClass("collapse");
            $prev.removeClass("collapse");
            return false;
        });
        $(figureSet).find(".next").click(function (i, next) {
            var $next = $(figureSet).find("figure:not(.collapse)").next("figure");
            if (!$next || !$next.length) {
                $next = $(figureSet).find("figure").first();
            }
            $(figureSet).find("figure:not(.collapse)").addClass("collapse");
            $next.removeClass("collapse");
            return false;
        });
    });
};

module.exports = new App();

},{"./test":2}],2:[function(require,module,exports){
"use strict";

module.exports = {
    test: function test() {
        console.log("test - hi");
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9icm9jY29saS1mYXN0LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9hcHAuanMiLCJzcmMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FPLElBQUksMkJBQU0sUUFBUTs7SUFFbkIsR0FBRyxHQUNNLFNBRFQsR0FBRyxHQUNTOzBCQURaLEdBQUc7O0FBRUQsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOztBQUVaLEtBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFLO0FBQ3BDLFNBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0QsU0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFLO0FBQ2xELGdCQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RFLGdCQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUN6QixxQkFBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDOUM7QUFDRCxhQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hFLGlCQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLG1CQUFPLEtBQUssQ0FBQztTQUNoQixDQUFDLENBQUM7QUFDSCxTQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsRUFBRSxJQUFJLEVBQUs7QUFDMUMsZ0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEUsZ0JBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ3pCLHFCQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMvQztBQUNELGFBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEUsaUJBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUIsbUJBQU8sS0FBSyxDQUFDO1NBQ2hCLENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztDQUNOOztpQkFHVSxJQUFJLEdBQUcsRUFBRTs7Ozs7aUJDOUJUO0FBQ1gsUUFBSSxFQUFBLGdCQUFHO0FBQ0gsZUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUM1QjtDQUNKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBUZXN0IGZyb20gJy4vdGVzdCc7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFRlc3QudGVzdCgpO1xuXG4gICAgICAgICQoJy5maWd1cmUtc2V0JykuZWFjaCgoaSwgZmlndXJlU2V0KSA9PiB7XG4gICAgICAgICAgICAkKGZpZ3VyZVNldCkuZmluZCgnZmlndXJlOm5vdCg6Zmlyc3QpJykuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICAkKGZpZ3VyZVNldCkuZmluZCgnLnByZXZpb3VzJykuY2xpY2soKGksIHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRwcmV2ID0gJChmaWd1cmVTZXQpLmZpbmQoJ2ZpZ3VyZTpub3QoLmNvbGxhcHNlKScpLnByZXYoJ2ZpZ3VyZScpO1xuICAgICAgICAgICAgICAgIGlmICghJHByZXYgfHwgISRwcmV2Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkcHJldiA9ICQoZmlndXJlU2V0KS5maW5kKCdmaWd1cmUnKS5sYXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoZmlndXJlU2V0KS5maW5kKCdmaWd1cmU6bm90KC5jb2xsYXBzZSknKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcbiAgICAgICAgICAgICAgICAkcHJldi5yZW1vdmVDbGFzcygnY29sbGFwc2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoZmlndXJlU2V0KS5maW5kKCcubmV4dCcpLmNsaWNrKChpLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRuZXh0ID0gJChmaWd1cmVTZXQpLmZpbmQoJ2ZpZ3VyZTpub3QoLmNvbGxhcHNlKScpLm5leHQoJ2ZpZ3VyZScpO1xuICAgICAgICAgICAgICAgIGlmICghJG5leHQgfHwgISRuZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkbmV4dCA9ICQoZmlndXJlU2V0KS5maW5kKCdmaWd1cmUnKS5maXJzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKGZpZ3VyZVNldCkuZmluZCgnZmlndXJlOm5vdCguY29sbGFwc2UpJykuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICAgICAgJG5leHQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFwcCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRlc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IC0gaGknKTtcbiAgICB9XG59O1xuIl19
