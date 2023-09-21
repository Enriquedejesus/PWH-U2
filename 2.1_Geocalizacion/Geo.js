const btn= document.getElementById("btn");
const p = document.getElementById("ubicacion");

    function GetUbicacion(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(success,error);
            }
            else{
                p.innerText = "Geocalzacion no soportada";
            }
    }
    function success(posicion){
        p.innerHTML = `Latitud: ${posicion.coords.latitude} <br>
                        Longitud: ${posicion.coords.latitude}`;
        


    }
    function error(err) {
        switch (err.code) {
            case err.PERMISSION_DENIED:
                p.innerHTML =
                    "Permiso Denegado" ;
                   
                break;
            case err.POSITION_UNAVAILABLE:
                p.innerHTML =
                      "Ubicacion no disponible";
                break;
            case err.TIMEOUT:
                p.innerHTML =
                      "Se agoto el tiempo de espera de la ubicacion ";
                break;
            case err.UNKNOWN_ERROR:
                p.innerHTML =
                    "Error desconocido";
                break;
        }
    }
btn.addEventListener("click",()=>{
    GetUbicacion();
});