/**
 * Created by Administrator on 2017/8/7.
 */


var spa=(function () {
    var initModule = function ($container) {
        spa.shell.initModule($container);
        console.log($container);
    };
    return {initModule:initModule};
}());
