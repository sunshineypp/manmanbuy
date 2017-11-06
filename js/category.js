$(function () {
    //1渲染分类标题
    var categoryUrl = tools.requestUrl("getcategorytitle");
    $.ajax({
        url: categoryUrl,
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            $('.category_title').html( template('title_tpl',data) );

            //2.单击分类列表，显示详细信息
            var lis = $('.category_title>li');
            $.each(lis,function (i,e) {
                (function(i) {
                    // lis[i].onclick = function(e) {
                    //     console.log(i);
                    // }

                    $(lis[i]).on('click','a',function () {
                        console.log($(this).parent());
                        var li = $(this).parent();
                        // console.log($(this).children().length);
                        if(li.children().length != 1){
                            li.children('.category_content').remove();
                            return false;
                        }else{
                            //渲染分类详细信息
                            var contentUrl = tools.requestUrl("getcategory");
                            titleId = $(this).data('titleId');
                            // console.log(titleId);

                            var $this = li;
                            $.ajax({
                                url:contentUrl,
                                data: {titleid:titleId},
                                dataType: 'json',
                                success: function (data) {
                                    console.log(data);
                                    var html = template('content_tpl',data);
                                    // console.log(html);
                                    $this.append(html);
                                }
                            });

                            // console.log($(this).children('.category_content'));

                            // $(this).children('.category_content').toggleClass('hide');
                        }
                    })
                })(i);

            });

        }
    });

});