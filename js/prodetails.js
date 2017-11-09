$(function () {
    //1.标题
    var brandName = tools.getParam('brandName');
    brandName= decodeURI(brandName);//转成utf-8编码
    // console.log(brandName);
    $('.pt .pro_name').html(brandName);
    //2.获取商品详情
    //获取传递的商品id
    var productid = tools.getParam('productid');
    // console.log(productid);
    var titleUrl = tools.requestUrl('getproduct');
    // console.log(titleUrl);
    $.ajax({
        url: titleUrl,
        dataType: 'json',
        data: {productid: productid},
        success: function (data) {
            // console.log(data);
            $('.product_bijia').html( template('product_tpl',data) );
        }
    });

    //3.获取商品评论列表
    var comUrl = tools.requestUrl('getproductcom');
    // console.log(comUrl);
    $.ajax({
        url: comUrl,
        dataType: 'json',
        data: {productid : productid},
        success: function (data) {
            console.log(data);
            $('.product-com-list ul').html( template('com_tpl',data) );
        }
    });
});