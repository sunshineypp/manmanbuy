$(function () {
    //渲染商品详情
    var moneyCtrl = tools.requestUrl('getmoneyctrlproduct');
    var productid = tools.getParam('productid');
    $.ajax({
        url: moneyCtrl,
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.buy_money_product').html( template('moneyPro',data) );
        }
    });
});