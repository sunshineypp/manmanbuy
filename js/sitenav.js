$(function () {
    var siteUrl = tools.requestUrl('getsitenav');
    $.ajax({
        url: siteUrl,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.buy_site_nav ul').html( template('site_tpl',data) );
        }
    });
});