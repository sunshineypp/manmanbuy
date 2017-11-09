$(function () {
    var couponProUrl = tools.requestUrl('getcouponproduct');
    var couponId = tools.getParam('couponid');
    // console.log(couponId);
    $.ajax({
        url: couponProUrl,
        dataType: 'json',
        data: {
            couponid: couponId
        },
        success: function (data) {
            console.log(data);
            $('.coupon_list ul').html( template('coupon_pro_tpl',data) );
        }
    });
});