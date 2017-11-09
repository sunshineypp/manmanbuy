var tools = {
    requestUrl: function (data) {
        var url = "http://192.168.32.32:9090/api/";
        return url+data;
    },
    getParamObj: function () {
        var obj = {};
        var search = location.search;
        search =search.slice(1);
        var arr = search.split('&');
        for (var i = 0; i < arr.length; i++){
            var key = arr[i].split('=')[0];
            var value = arr[i].split('=')[1];
            obj[key] = value;
        }
        return obj;
    },
    getParam: function (key) {
        return this.getParamObj()[key];
    },
    scrollTop: function () {
        //4.滚回顶部
        $('.scroll_top').on('click',function () {
            $('body,html').animate({scrollTop:0},500);
        });
    },
    toTop: function () {
        $('body,html').animate({scrollTop:0},500);
    }
};
