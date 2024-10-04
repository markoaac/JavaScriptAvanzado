let map;
const btn = document.getElementById("btn");
function GetUbicacion(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
    }
    else{
        alert("El navegador no soporta geolocalización");
    }
}

function showPosition(position){
    // lugar.innerHTML = `Latitude: ${position.coords.latitude} 
    // <br> Longitude: ${position.coords.longitude}`;
    map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    // let marcador = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    // marcador.bindPopup("<b>Tec de Teziutlán</b>").openPopup();

}

function errorPosition(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("Permiso denegado a la ubicación");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("ubicación no disponible");
            break;
        case error.TIMEOUT:
            alert("El tiempo de espera se ha agotado");
            break;
        case error.UNKNOWN_ERROR:
            alert("Error desconocido");
            break;
    }
}

btn.addEventListener("click", () => {
    getUserRandomAsync();
});

async function getUserRandomAsync(){
    try {
        const response = await fetch("https://randomuser.me/api/");
        const json = await response.json();
        const lat = json.results[0].location.coordinates.latitude;
        const lng = json.results[0].location.coordinates.longitude;
        const nombre = `${json.results[0].name.first} ${json.results[0].name.last}`;
        let marcador = L.marker([lat, lng]).addTo(map);
        marcador.bindPopup(nombre).openPopup();
    } catch (error) {
        alert(error);
    }
}

GetUbicacion();