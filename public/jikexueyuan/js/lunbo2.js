/**
 * Created by Administrator on 2015/9/22.
 */

define(function(require, exports, module) {
    var $ = require('jquery');
    var j = 1;
    var leftdis2;


    function lunbo2() {
        if (j >= 19) {
            j = 0;
        }
        if (j < 0) {
            j = 19;
        }
        console.log(leftdis2);
        leftdis2 = (-160 * j) + "px";
        $("div#lunboqiye").css({"left": leftdis2});
        j++;
    }

    $("div#prekey1").click(function () {
        j = j - 2;
        {
            if (j < 0) {
                j = 18;
                lunbo2();
            } else {
                lunbo2();
            }
        }
    }).one();

    $("div#nextkey1").click(function () {
        lunbo2();
    });


});
//lunbo3