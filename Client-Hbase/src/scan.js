import translate from "./translate"
export default function scan() {
    $("#submit").click(function () {
      let start = $("#start").val();
      let stop = $("#stop").val();
      let filter = $("#filter").val();
      fetch('/api/scan?port=' + window.port + '&start=' + start + '&stop=' + stop + '&filter=' + filter + '&tablename=' + window.tablename).then(function (response) {
        return response.json();
      }).then(function (myJson) {
        translate(myJson)
        console.log(myJson);
        layer.close(layer.index);
        });

    });
}
