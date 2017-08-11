/**
 * Created by Administrator on 2017/8/7.
 */
/*
* 全局变量，闭包函数，将执行的对象保存在变量中。
* */
spa.shell=(function () {
    /*
    * s声明变量，将变量提升，
    * */
    var
        cofigMap = {
        main_html:
        '<div class="spa-shell-head">'
        + '<div class="spa-shell-head-logo"></div>'
        + '<div class="spa-shell-head-acct"></div>'
        + '<div class="spa-shell-head-search"></div>'
        +'</div>'
        +'<div class="spa-shell-main">'
        +'<div class="spa-shell-main-nav"></div>'
        +'<div class="spa-shell-main-content"></div>'
        +'</div>'
        +'<div class="spa-shell-foot"></div>'
        +'<div class="spa-shell-foot-chat"></div>'
        +'<div class="spa-shell-foot-modal"></div>',
            chat_extend_time:400,
            chat_retract_time:250,
            chat_extend_height:450,
            chat_retract_height:15,
            chat_retracted_title:'click to retract',
            chat_extended_title:'click to extend'
    },
        /*
        * 中间变量，未保存状态
        * */
        stateMap={
            $container:null,
            is_chat_retracted:true
        },
        jqueryMap = {},
        setJqueryMap,initModule,toggleChat;

    /*
    * 将DOM 保存在setJqueryMap集合中，减少历遍次数，提高性能；
    * */
    setJqueryMap=function () {
      var $container = stateMap.$container;
      jqueryMap={
          $container :$container,
          $chat:$container.find('.spa-shell-foot-chat')
      };
    };

    toggleChat=function ( do_extend,callback) {
      var
          px_chat_ht=jqueryMap.$chat.height(),
          is_open=px_chat_ht === cofigMap.chat_extend_height,
          is_closed= px_chat_ht=== cofigMap.chat_retract_height,
          is_sliding= ! is_open && !is_closed;
      if(is_sliding){
          return false;
      }
      if(do_extend){
          jqueryMap.$chat.animate(
              {height:cofigMap.chat_extend_height},
              cofigMap.chat_extend_time,
              function () {
                  jqueryMap.$chat.attr('title',cofigMap.chat_extended_title);
                  stateMap.is_chat_retracted=false;
                  if (callback){
                      callback(jqueryMap.$chat);
                  }
              }
          );
          return true;
      }
      jqueryMap.$chat.animate(
          {height:cofigMap.chat_retract_height},
          cofigMap.chat_retract_time,
          function () {
              jqueryMap.$chat.attr('title',cofigMap.chat_retracted_title);
              stateMap.is_chat_retracted=true;
              if(callback){
                  callback(jqueryMap.$chat);
              }
          }
      )
        return false;
    };
    onClickChat = function (event) {
      toggleChat(stateMap.is_chat_retracted);
      return false;
    };
    /*
    * 初始化，
    * */
    initModule=function ($container) {
        stateMap.$container=$container;
        $container.html(cofigMap.main_html);
         setJqueryMap();
         stateMap.is_chat_retracted=true;
        jqueryMap.$chat.attr('title',cofigMap.chat_retracted_title).click(onClickChat);

    };
    /*
    * 将函数导出
    * */
    return {initModule:initModule};
}());