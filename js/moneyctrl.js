$(function () {
    //渲染折扣商品
    var moneyUrl = tools.requestUrl('getmoneyctrl');
    console.log(moneyUrl);

    //2.渲染商品内容列表
    //默认第一页
    var currentPage = 0;
    function render(currentPage) {
        $.ajax({
            url: moneyUrl,
            dataType: 'json',
            data: {
                pageid: currentPage
            },
            success: function (data) {
                data.currentPage = currentPage;
                var page = [];
                var pages = Math.ceil(data.totalCount/data.pagesize);
                console.log(pages);
                data.pages = pages;
                for(var i = 0; i <= pages-1; i++){
                    page.push(i);
                }
                data.page= page;
                console.log(data);
                $('.product_list').html( template('discount_tpl',data) );
            }
        });
    }

    render(currentPage);

    //上一页
    $('.product_list').on('click','.prePage',function () {
        var count = $(this).parent().parent().data('count');
        currentPage --;
        if(currentPage < 0){
            currentPage = 0;
        }
        render(currentPage);
        //回顶部
        tools.toTop();
    });

    //下一页
    $('.product_list').on('click','.nextPage',function () {
        var count = $(this).parent().parent().data('count');
        currentPage ++;
        if(currentPage > count-1){
            currentPage = count-1;
        }

        //回顶部
        tools.toTop();

        render(currentPage);
    });

    //更改select标签内容重新渲染
    $('.product_list').on('change','#selectPage',function () {
        console.log($(this).val());
        currentPage = $(this).val();
        render(currentPage);
        tools.toTop();
    });


    //回顶部
    tools.scrollTop();
    
});