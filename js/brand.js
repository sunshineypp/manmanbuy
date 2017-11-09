$(function () {
    //对应的十大品牌
    var brandUrl = tools.requestUrl('getbrand');
    var brandtitleid = tools.getParam('brandtitleid');
    $.ajax({
        url: brandUrl,
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid
        },
        success: function (data) {
            console.log(data);
            // console.log(data.result.length);
            var len = data.result.length;
            for(var i = 1; i <= len;i++){
                data.result[i-1].len=i;
            }

            $('.brand ul').html( template('brand_tpl',data) );
            
        }
    });

    //销量排行渲染
    var countUrl = tools.requestUrl('getbrandproductlist');
    $.ajax({
        url: countUrl,
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid
        },
        success: function (data) {
            console.log(data);
            $('.brand_count ul').html( template('brand_count',data) );
        }
    });

    //最新评论
    var cmtUrl = tools.requestUrl('getproductcom');
    var categoryId = tools.getParam('categoryId');
    $.ajax({
        url: cmtUrl,
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid,
            productid: categoryId
        },
        success: function (data) {
            console.log(data);
            $('.new_cmt ul').html( template('brand_cmt_tpl',data) );
        }
    });
});