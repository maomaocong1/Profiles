/**
 * Created by Administrator on 2015/9/22.
 */
/**
 * Created by Administrator on 2015/9/22.
 */

define(function(require, exports, module) {
    var $ = require('jquery');
    var n = 0;
    var leftdis4=0;


    function lunbo4(){
        if(n>=19){
            n=0;
        }
        if(n<0){
            n=19;
        }
        leftdis4=(-160*n)+"px";
        $("div#lunbomeiti").css({"left":leftdis4});
        n++;
    }
    $("div#prekey3").click(function(){
        n=n-2;

        {
            if(n<1){
                n=18;
                lunbo4();
            }else{
                lunbo4();
            }
        }
    });

    $("div#nextkey3").click(function(){
        lunbo4();
    });

});

