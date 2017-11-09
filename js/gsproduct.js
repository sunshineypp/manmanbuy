$(function () {
    //1.渲染店铺信息
    var shopUrl = tools.requestUrl('getgsshop');
    $.ajax({
        url: shopUrl,
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $('.gs_header ul').html( template('shop_tpl',data) );
        }
    });

    //2.渲染下拉列表
    var downUrl = tools.requestUrl('getgsshoparea');
    $.ajax({
        url: downUrl,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('#area ul').html( template('down_tpl',data) );
        }
    });

    //2.渲染商品信息
    //店铺id
    var shopId = 0;
    //区域id
    var areaId = 0;
    var proUrl = tools.requestUrl('getgsproduct');
    $.ajax({
        url: proUrl,
        dataType: 'json',
        data: {
            shopid: shopId,
            areaid: areaId
        },
        success: function (data) {
            console.log(data);
            $('.gs_product_list ul').html( template('pro_tpl',data) );
        }
    });

});