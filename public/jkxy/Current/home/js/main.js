/**
 * Created by Administrator on 2015/11/13.
 */
$(document).ready(function () {
    var currentvedio =1;
    var dt = localStorage.getItem("countphp");
    var bt =localStorage.getItem("countbig");
    //读取php预约数
    if(dt<123){
        localStorage.setItem("countphp", "123");
        dt=123;
        $(".stu_countphp").html(dt);
    }else{
        $(".stu_countphp").html(dt);
    }
    //读取大数据预约数
    if(bt<123){
        localStorage.setItem("countbig", "123");
        bt=123;
        $(".stu_countbig").html(bt);
    }else{
        $(".stu_countbig").html(bt);
    }

//选择课程的响应
    fn("#class1","#top1");
    fn("#class2","#top2");
    fn("#class3","#top3");
    fn("#class4","#top4");
    fn("#class5","#top5");
    $("#top1").click(function(){
        window.open("http://jiuye.jikexueyuan.com/train/web?huodong=jiuye_web_index");
    });
    $("#top2").click(function(){
        window.open("http://jiuye.jikexueyuan.com/train/android?huodong=jiuye_android_index");
    });
    $("#top3").click(function(){
        window.open("http://jiuye.jikexueyuan.com/train/javaweb?huodong=jiuye_javaweb_index");
    });
    $("#top4").click(function(){
        dt++;
        $(".stu_countphp").html(dt);
        localStorage.setItem("countphp",dt);
        window.open("http://form.mikecrm.com/f.php?t=tLGlj6");
    });
    $("#top5").click(function(){
        bt++;
        $(".stu_countbig").html(bt);
        localStorage.setItem("countbig",bt);
        window.open("http://form.mikecrm.com/f.php?t=svPj8h");
    });
    //咨询按键
    $(".zhixun").click(function(){
        window.open("https://chat.meiqia.com/widget/desktop/index.html?unitid=7594&win=max&ol=auto&color=initial&staff=15800%20&cookie=006600144637317590945084&_realref_=http%3A%2F%2Fjiuye.jikexueyuan.com%2Ftask%2F16-16");
    });
    //切换视频
    $(".jiantou").click(function(){
        currentvedio=changevideo(currentvedio);
    });

    //轮播
    var currentcount;
    var a=setInterval(function () {
        currentcount=lunbo(currentcount);
    },7000);
    //鼠标移入暂停轮播，移出恢复
    $(".techerlubo_view").mouseenter(function(){
        clearInterval(a);
    }).mouseleave(function(){
        a=setInterval(function () {
            currentcount=lunbo(currentcount);
        },7000);
    });

    $("#dot1").click(function(){
       $(".dot").removeClass("active");
        $("#dot1").addClass("active");
        lunbo(0);
        return 0;
    });
    $("#dot2").click(function(){
        $(".dot").removeClass("active");
        $("#dot2").addClass("active");
        lunbo(1);
        return 1;
    });
    $("#dot3").click(function(){
        $(".dot").removeClass("active");
        $("#dot3").addClass("active");
        lunbo(2);
        return 2;
    });

});

function fn(obj1,obj2){
    $(obj1).mouseenter(function(){
        $(obj2).css("margin-top","-225px");
    });
    $(obj1).mouseleave(function(){
        $(obj2).css("margin-top","0");
    });
}
function changevideo(currentvedio){
    if(currentvedio==1){
        $(".vedio_box").css("margin-left","-725px");
        currentvedio=2;

    }else{
        $(".vedio_box").css("margin-left","0");
        currentvedio=1;
    }
    return currentvedio;

}

function lunbo(currentcount){
        console.log(currentcount);
        var dis;
        if(currentcount==undefined||currentcount==NaN){
            dis="-100%";
            currentcount=1;
        }else if(currentcount==0){
            dis=0;
        }else if(currentcount==1){
            dis="-100%";
        }else if(currentcount==2){
            dis="-200%";
        }

        $(".techerlubo_view").css("margin-left",dis);
    $(".dot").removeClass("active");
    $($(".dot")[currentcount]).addClass("active");
    if(currentcount==2)
        {
            currentcount=0;

        }else{
            currentcount++;
        }

    return currentcount;

}
