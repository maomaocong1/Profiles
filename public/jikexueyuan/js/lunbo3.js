/**
 * Created by Administrator on 2015/9/22.
 */

define(function(require, exports, module) {
    var $ = require('jquery');
    var m = 1;
    var leftdis3;


    function lunbo3(){
        if(m>=19){
            m=0;
        }
        if(m<0){m=19;
        }
        leftdis3=(-137*m)+"px";
        $("div#lunboyuanxiao").css({"left":leftdis3});
        m++;
    }
    $("div#prekey2").click(function(){
        m=m-2;
        {
            if(m<0){
                m=18;
                lunbo3();
            }else{
                lunbo3();
            }
        }
    });

    $("div#nextkey2").click(function(){
        lunbo3();
    });



});
