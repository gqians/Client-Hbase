export default function scan(json) {
  let myjson = processingdata(json);
  let json0 = myjson[0];
  let col = [];
  for(let key in json0) {
    col.push({ field: key, title: key, width: 150, sort: true})
  }
  
  layui.use('table', function () {
    var table = layui.table;

    //第一个实例
    table.render({
      elem: '#table'
      , height: 700
      ,data:myjson
      , page: true //开启分页
      , cols: [col]
    });

  });

}
function processingdata(jsons) {
  let newJson=[]
  for (let json of jsons) {
    window.flag1 = 0;//定义flag判断key是否一致
    for (let njson of newJson) {
      if (json.key == njson.key) {//若key一致，则添加到一个json对象中
        let key = json.column;
        let val = json.$;
        njson[key] = val;
        window.flag1 = 1;
      }
    }
    if (window.flag1 == 0) {//若Key不一致，则新建一个json对象
      newJson.push({
        key: json.key
      })
      let len = newJson.length;
      let key = json.column;
      let val = json.$;
      newJson[len - 1][key] = val;
    }
  }
  return newJson;
}
