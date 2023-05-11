/**
 * Created by Administrator on 2015/9/22.
 */


define(function (require, exports, module) {

var $ = require('jquery');

    $("ul.u4 li").hover(function () {
            $("div.lesson-infor p").css({"height": "52px"});
        }, function () {
            $("div.lesson-infor p").css({"height": "0"});
        }
    )
});