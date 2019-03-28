require('../public/javascripts/zTree_v3/css/zTreeStyle/zTreeStyle.css')
require('../public/javascripts/zTree_v3/js/jquery.ztree.core.min.js')
import scan from './scan.js'

export default function tree(zNodes) {
  let zTreeObj;
  // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
  //let setting = {};
  // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
  //let zNodes = [
  //  {
  //    name: "test1", open: true, children: [
  //      { name: "test1_1" }, { name: "test1_2" }]
  //  },
  //  {
  //    name: "test2", open: true, children: [
  //      { name: "test2_1" }, { name: "test2_2" }]
  //  }
  //];
  function showlayer() {
    layer.open({
      type: 1 //Page层类型
      , area: ['500px', '300px']
      , title: '设置过滤条件'
      , shade: 0.6 //遮罩透明度
      , maxmin: false //允许全屏最小化
      , anim: 1 //0-6的动画形式，-1不开启
      , content: '<form class="layui-form"><div class="layui-form-item"><label class="layui-form-label" > start</label><div class="layui-input-block"><input id="start" type="text" name="title" required lay-verify="required" placeholder="请输入StartRow" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><label class="layui-form-label" >end</label><div class="layui-input-block"><input type="text" id="stop" name="title" required lay-verify="required" placeholder="请输入EndRow" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><label class="layui-form-label" > 过滤条件</label><div class="layui-input-block"><input type="text" id="filter" name="title" required lay-verify="required" placeholder="暂时只支持行键正则表达式" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><div class= "layui-input-block"><span class="layui-btn" id="submit">确定</span><button type="reset" class="layui-btn layui-btn-primary">重置</button></div></div></form>'
    });
    scan();
    
  }
  function zTreeOnClick(event, treeId, treeNode) {
    if (treeNode.isParent == false) {
      let parentname = treeNode.parentTId;
      let parent = window.zTreeObj.getNodeByTId(parentname);
      window.tablename = parent.name +':'+treeNode.name;
      //alert(treeNode.tId + ", " + treeNode.name);
      showlayer();
    }
  };
  let setting = {
    callback: {
      onClick: zTreeOnClick
    }
  };
   $(document).ready(function () {
     zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
     window.zTreeObj = zTreeObj;
   });
};
