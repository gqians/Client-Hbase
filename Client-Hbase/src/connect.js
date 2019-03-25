require('../public/javascripts/layui/css/layui.css')
require('../public/javascripts/layui/layui.js')
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
            console.log(myJson);
       });
       layer.close(index);
      });
    })
  });
  
};
