var winHeight = $(window).height();

function headerCss() {              //承载主体部分的div样式
    $("#header").css({
        "border":"#97846c solid 2px",
        "width":"96%",
        "margin":"2% auto",
        "margin-bottom":"0px",
        "padding":"1%",
        "display":"flex" ,  //弹性布局，使内容的几个块可以弹性排列
        "flex-wrap":"wrap",
        // "justify-content":"space-between"
    });

}
headerCss();

function headImg() {            //承载首部图片的div的样式
    var a = 0.35*winHeight;
    $("#headImg").css({
        "width":"65%",
        "height":a ,
    });
    $("#headImg img").attr("src","resource/head01.jpg");    //首部图片url请在这里调整

}
headImg();

function imgCss() {             //图片通用样式，默认填充整个div，调整大小请在相应div中处理
    $(".image").css({
        "width":"100%",
        "height":"100%"
    });
}
imgCss();

function introCSS() {
    var h = 0.35*winHeight;
    $("#introduce").css({
        "width":"23%",
        "height":h ,
        "padding":"5%",
        "border":"red solid 3px",
        "margin-left":"1%",
    });
}
introCSS();

function mainBodyCss() {
    var h = 0.8*winHeight;
    $("#mainBody").css({
        "width":"60%",
        "height":h ,
        "margin-left":"16%",
        "margin-top":0.02*winHeight,
        "border":"red 2px solid"
    });
}
mainBodyCss();

function messageCss() {
    var h = 0.55*winHeight;
    $("#message").css({
        "width":"20%",
        "height":h ,
        "border":"red 2px solid",
        "margin":"auto",
        "margin-top":0.02*winHeight,
        "margin-right":"1%",
        "align-self":"flex-end",
    });
}
messageCss();

function footer() {
    var h = 0.1*winHeight;
    $("#footer").css({
        "width":"98%",
        "height":h ,
        "margin":"auto",
        "margin-top":0.1*h,
        "border":"red 2px solid",
    });
}
footer();

function menuCss() {
    var h = 0.4*winHeight;
    $("#menu").css({
        "width":"12%",
        "height":h,
        "position":"fixed",
        "border":"red 2px solid",
        "margin-left":"1%",
        "margin-top":0.4*winHeight,
        "z-index":"1000",
    });
}
menuCss();