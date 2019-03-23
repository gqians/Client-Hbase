const $=require('jquery')
require('../public/javascripts/layui/css/layui.css')
require('../public/javascripts/layui/layui.js')
require('../public/javascripts/zTree_v3/css/zTreeStyle/zTreeStyle.css')
require('../public/javascripts/zTree_v3/js/jquery.ztree.core.min.js')
//let ready=require('./tree')
layui.config({
  dir: '../javascripts/layui/'
});
layui.use('element', function () {
  let element = layui.element;

});
let zTreeObj;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
let setting = {};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
let zNodes = [
  {
    name: "test1", open: true, children: [
      { name: "test1_1" }, { name: "test1_2" }]
  },
  {
    name: "test2", open: true, children: [
      { name: "test2_1" }, { name: "test2_2" }]
  }
];
$(document).ready(function () {
  zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
});
