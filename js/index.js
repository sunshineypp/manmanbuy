$(function () {
    //1.渲染首页菜单栏
    //获取访问地址
    var url = tools.requestUrl('getindexmenu');
    // console.log(url);
    $.ajax({
        url : url,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.nav ul').html( template('nav_tpl',data) );
            //让后四项默认隐藏，
            $('.nav ul li:nth-child(8)~li').addClass('hide');
        }
    });


    //2.单击更多 显示后面的导航项
    $('.nav ul').on('click','li:nth-child(8)',function () {
        $('.nav ul li:nth-child(8)~li').toggleClass('hide');
    });

    //3.渲染折扣列表
    var discountUrl = tools.requestUrl('getmoneyctrl');
    $.ajax({
        url: discountUrl,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.product_list ul').html( template('discount_tpl',data) );
        }
    });

    //回顶部
    tools.scrollTop();
});