$(function () {
    //渲染标题
    var titleUrl = tools.requestUrl('getbaicaijiatitle');
    $.ajax({
        url: titleUrl,
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $('.buy_baicaijia_pro .tab').html( template('title_tpl',data) );
        }
    });

    //渲染内容
    var contentUrl = tools.requestUrl('getbaicaijiaproduct');
    function render(titleId) {
        $.ajax({
            url: contentUrl,
            dataType: 'json',
            data: {
                titleid : titleId
            },
            success: function (data) {
                $('.bcj_list ul').html( template('content_tpl',data) );
            }
        });
    }
    render(0);

    // //li单击事件
    // $('.title_wrap .tab').on('click','li',function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
    //
    // var ul = document.getElementById('tab');
    // var lis = ul.getElementsByTagName('li');
    // console.log(lis);
    // console.log(lis.length);
    // for(var i = 0; i < lis.length; i++){
    //
    // }
    // var scrollX =  0;
    // ul.addEventListener('touchstart',function (e) {
    //     //标题滚动
    //     console.log(e.changedTouches);
    //     scrollX = e.changedTouches[0].clientX;
    //     console.log(scrollX);
    // });
    // ul.addEventListener('touchmove',function (e) {
    //     console.log(e.changedTouches);
    //     scrollX = e.changedTouches[0].clientX;
    //     console.log(scrollX);
    // });
    // ul.addEventListener('touchend',function (e) {
    //     console.log(e.changedTouches);
    //     scrollX = e.changedTouches[0].clientX;
    //     console.log(scrollX);
    // })
});