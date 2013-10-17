localStorage.idCamara="2";
localStorage.servidor = "172.16.0.155:8181";
 
 $( document ).ready(function() {
    $("#arriba").click(function() {
                    moverCamara("up");
                });

     $("#abajo").click(function() {
                    moverCamara("down");
                });

      $("#derecha").click(function() {
                    moverCamara("right");
                });
      $("#izquierda").click(function() {
                    moverCamara("left");
                });
      $("#zoomOut").click(function() {
                    moverCamara("zoomOut");
                });
      $("#zoomIn").click(function() {
                    moverCamara("zoomIn");
                });
});

function moverCamara(direccion){
    alert("mover " +direccion);
    var url="http://"+localStorage.servidor+"/videoweb-rest-services/service/PTZService/"+direccion+"/"+localStorage.idCamara
    $.getJSON(url,
         function(data) {
            alert(data+" moviendo");         
          });  
}

