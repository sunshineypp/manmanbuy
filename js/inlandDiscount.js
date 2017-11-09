$(function () {
    var discountUrl = tools.requestUrl('getinlanddiscount');
    $.ajax({
        url: discountUrl,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.buy_discount_product ul').html( template('discount_tpl',data) );
        }
    });
});