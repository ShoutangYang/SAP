/**
 * Created by Administrator on 2017/8/7.
 */


var spa=(function () {
    var initModule = function ($container) {
        $container.html(
            '<h1 style="display:inline-block;marhain:25px;">'
            +'hello world'
            +'</h1>'
        );
    };
    return {initModule:initModule};
}());
console.log(spa);