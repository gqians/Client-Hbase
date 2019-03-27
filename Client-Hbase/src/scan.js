export default function scan() {
  $("#submit").click(function () {
    let start = $("#start").text;
    let stop = $("#stop").text;
    let filter = $("#filter").text;
    fetch('/api/connect?port=' + window.port + '&start=' + start + '&stop=' + stop + '&filter=' + filter + '&table=' + window.tablename).then(function (response) {
      return response.json();
    })
      .then(function (myJson) {
        //dealTable(myJson);
        console.log(myJson);
      });
  })
}
function dealTable(Json) {

}
