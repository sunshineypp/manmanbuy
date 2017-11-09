$(function () {
    var couponUrl = tools.requestUrl('getcoupon');
    $.ajax({
        url: couponUrl,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.buy_coupon_title ul').html( template('coupon_tpl',data) );
        }
    });
});