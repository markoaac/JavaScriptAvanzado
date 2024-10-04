function getDog(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .catch(error => alert(error))
    .then(json =>{
        alert(json.message);
        alert(json.status);
    });
}

const btn = document.getElementById("btnConsultar");
const contenedor = document.getElementById("contenedor");
btn.addEventListener("click",() =>{
    // for(let i = 1; i <= 5; i++){
    //     getDogAsync();
    // }
    getUserRandomAsync();
});

async function getDogAsync(){
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const json = await response.json();
        const imagen = document.createElement("img");
        imagen.src = json.message;
        contenedor.appendChild(imagen);
    } catch (error) {
        alert(error);
    }
}

async function getUserRandomAsync(){
    try {
        const response = await fetch("https://randomuser.me/api/");
        const json = await response.json();
        const imagen = document.createElement("img");
        imagen.src = json.results[0].picture.large;
        if(json.results[0].gender == "male"){
            chart.datasets[0].data = +1;
            chart.update();
        }
        else{
            chart.datasets[1].data = +1;
            chart.update();
        }
        contenedor.appendChild(imagen);
    } catch (error) {
        alert(error);
    }
}