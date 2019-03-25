require('../public/javascripts/layui/css/layui.css')
require('../public/javascripts/layui/layui.js')
import tree from './tree'
//添加连接窗口

export default function connect(id) {
  layui.config({
    dir: '../javascripts/layui/'
  });
  layui.use('element', function () {
    let element = layui.element;
  });
  layui.use('layer', function () {
    let layer = layui.layer;
    $("#"+id).click(function () {
      layer.prompt({ title: '请输入端口号', formType: 0 }, function (val, index) {
        fetch('/api/connect?port=' + val)
          .then(function (response) {
          return response.json();
       })
          .then(function (myJson) {
            dealNode(myJson);
       });
       layer.close(index);
      });
    })
  });
  
};
function dealNode(OriNode) {
  let FinNode = [];
  
  for (let node of OriNode) {
    window.flag = 0;
    let FinNode_1 = {};
    let name = (node.name).split(":");
    for (let i=0; i < FinNode.length; i++) {
      if (FinNode[i].name == name[0]) {
        FinNode[i].children.push({ name: name[1] });
        window.flag = 1;
      }
    }
    if (window.flag == 0) {
      FinNode_1.name = name[0];
      FinNode_1.open = false;
      FinNode_1.children = [{ name: name[1]}];
      FinNode.push(FinNode_1);
    }
  }
  tree(FinNode);
}
