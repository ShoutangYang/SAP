/**
 * Created by Administrator on 2017/8/14.
 * chat nodule for spa
 */
/*
* 匿名和闭包函数，返回里两个函数
* */
spa.chat=function () {
  var
      configMap ={
      main_html:'<div style="padding:  1px; color: #fff;">'+'say hello to chat'+'</div>',
          settable_map:{}
      },
      stateMap ={$container:null},
      jqueryMap={},

      setJqueryMap,configModule,initModule
      ;


  setJqueryMap = function () {
      var $container = stateMap.$container;
      jqueryMap={$container:$container};
        };

  configModule=function (input_map) {
      spa.util.setConfigMap({
          input_map:input_map,
          settable_map:configMap.settable_map,
          config_map:configMap
      });
      return true;
  };

  initModule=function ($container) {
      $container.html(configMap.main_html);
      stateMap.$container=$container;
      setJqueryMap();
      return true;
  };
  return{
      configModule:configModule,
      initModue:initModule
  };
}();