$(function () {
    //渲染
    var brandTitleUrl = tools.requestUrl('getbrandtitle');
    $.ajax({
        url: brandTitleUrl,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('.brand_title ul').html( template('brand_title_tpl',data) );
        }
    });
});