/**
 * Created by Administrator on 2015/9/22.
 */


define(function (require, exports, module) {
    var _timer = {};

    function delay_till_last(id, fn, wait) {
        if (_timer[id]) {
            window.clearTimeout(_timer[id]);
            delete _timer[id];
        }

        return _timer[id] = window.setTimeout(function () {
            fn();
            delete _timer[id];
        }, wait);
    }
});