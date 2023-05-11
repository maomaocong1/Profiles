/**
 * Created by Administrator on 2015/9/22.
 */
define(function (require, exports, module) {
        var $ = require('jquery');
        var delay = require('delay');
        var i = 1;
        var leftdis;
        setInterval(function () {
            if (i >= 4) {
                i = 0;
            }
            if (i < 0) {
                i = 4;
            }
            leftdis = -570 * i + "px";
            $("div.lunbo_bar").css({"left": leftdis});
            $("div.spanbox div").removeClass("active");
            $($("div.spanbox div")[i]).addClass("active");
            i++;
        }, 15000);

        function lunbo() {
            if (i >= 4) {
                i = 0;
            }
            if (i < 0) {
                i = 4;
            }
            leftdis = (-570 * i) + "px";
            $("div.lunbo_bar").css({"left": leftdis});
            $("div.spanbox div").removeClass("active");
            $($("div.spanbox div")[i]).addClass("active");
            i++;
        }

        $("div#prekey").click(function () {
            i = i - 2;
            {
                if (i < 0) {
                    i = 3;
                    lunbo();
                } else {
                    lunbo();
                }
            }
        });

        $("div#nextkey").click(function () {
            lunbo();
        });
    }
);

