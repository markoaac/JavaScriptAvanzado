let lugar = document.getElementById("lugar");
const btn = document.getElementById("btnGeo");

function GetUbicacion(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
    }
    else{
        lugar.innerText ="El navegador no soporta geolocalización";
    }
}

function showPosition(position){
    lugar.innerHTML = `Latitude: ${position.coords.latitude} 
    <br> Longitude: ${position.coords.longitude}`;
}

function errorPosition(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            lugar.innerText = "Permiso denegado a la ubicación";
            break;
        case error.POSITION_UNAVAILABLE:
            lugar.innerText = "ubicación no disponible";
            break;
        case error.TIMEOUT:
            lugar.innerText = "El tiempo de espera se ha agotado";
            break;
        case error.UNKNOWN_ERROR:
            lugar.innerText = "Error desconocido";
            break;
    }
}

btn.addEventListener("click", () => {
    GetUbicacion();
});