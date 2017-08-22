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
      main_html:
      '<div class ="spa-chat">'
      +'<div class ="spa-chat-head">'
            + '<div class="spa-chat-head-toggle">+</div>'
            +'<div class="spa-chat-head-title">'
           +'chat'
          +'</div>'
      +'</div>'
          +'<div class="spa-chat-closer">x</div> '
            +'<div class="spa-chat-sizer"> '
                 +'<div class="spa-chat-msgs"></div> '
                +'<div class="spa-chat-box"> '
                     +'<input type="text"/> '
                        +'<div>send</div>'
                +'</div>'
             +'</div>'
          +'</div>',

          settable_map:{
              slider_open_time:true,
              slider_closed_time:true,
              slider_opened_em:true,
              slider_closed_em:true,
              slider_opened_title:true,
              slider_closed_titile:true,

              chat_model:true,
              people_model:true,
              set_chat_anchor:true
          },
          slider_open_time:250,
          slider_close_tie:250,
          slider_opend_em:16,
          slider_closed_em:2,
          slider_opened_title:'click to clode',
          slider_cloded_title:'click to open'

          chat_model:null,
          people_nodle:null,
          set_chat_anchor:null
      },
      stateMap ={
          $container:null,
          position_type:'closed',
          px_per_em:0,
          slider_hidden_px:0,
          slider_closed_px:0,
          slider_opened_px:0

      },
      jqueryMap={},

      setJqueryMap,configModule,initModule,
      getEmSize,setPxSize,setSilderPosition,onClickToggle
      ;
  getEmSize= function (elem) {
      return Number(
          getComputedStyle( elem,'').fontSize.match(/\d*.?\d*/)[0]
      );
  };

  setJqueryMap = function () {
      var $container = stateMap.$container,
          $append_target=stateMap.$append_target,
          $slider=$append_target.find('.spa-chat');

      jqueryMap={
          $container:$container,
          $slider:$slider,
          $head:$slider.find('.spa-chat-head'),
          $toggle:$slider.find('.spa-chat-head-toggle'),
          $title:$slider.find('.spa-chat-head-title'),
          $sizer:$slider.find('.spa-chat-sizer'),
          $msgs:$slider.find('.spa-chat-msgs'),
          $box:$slider.find('.spa-chat-box'),
          $input:$slider.find('.spa-cat-input input[type=text]')
      };
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
      initModule:initModule
  };
}();