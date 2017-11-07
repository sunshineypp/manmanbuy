$(function () {
    //1.获取商品分类标题
    //获取传递的商品id
    var categoryId = tools.getParam('categoryid');
    // console.log(categoryId);
    var titleUrl = tools.requestUrl('getcategorybyid');
    // console.log(titleUrl);
    $.ajax({
        url: titleUrl,
        dataType: 'json',
        data: {categoryid: categoryId},
        success: function (data) {
            // console.log(data);
            $('.product_title_list').html( template('title_tpl',data) );
        }
    });


    //2.渲染商品内容列表
    var page = 1;
    function render(currentPage) {
        var contentUrl = tools.requestUrl('getproductlist');
        $.ajax({
            url: contentUrl,
            dataType: 'json',
            data: {
                categoryid: categoryId,
                pageid: currentPage
            },
            success: function (data) {
                data.currentPage = currentPage;
                var page = [];
                var pages = Math.ceil(data.totalCount/data.pagesize);
                data.pages = pages;
                for(var i = 1; i <= pages; i++){
                    page.push(i);
                }
                data.page= page;
                console.log(data);
                $('.product_content_list').html( template('content_tpl',data) );
            }
        });
    }

    render(page);

    //上一页
    $('.product_content_list').on('click','.prePage',function () {
        var count = $(this).parent().parent().data('count');
        page --;
        if(page < 1){
            page = 1;
        }
        render(page);
        //回顶部
        tools.toTop();
    });

    //下一页
    $('.product_content_list').on('click','.nextPage',function () {
        var count = $(this).parent().parent().data('count');
        page ++;
        if(page > count){
            page = count;
        }

        //回顶部
        tools.toTop();

        render(page);
    });

    //更改select标签内容重新渲染
    $('.product_content_list').on('change','#selectPage',function () {
        // console.log($(this).val());
        page = $(this).val();
        render(page);
        tools.toTop();
    });


    //回顶部
    tools.scrollTop();
});