const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["ISC", "INF", "MEC", "ALI"],
    datasets: [
      {
        label: "Aprobados",
        data: [12, 19, 3, 5],
        borderWidth: 2,
        backgroundColor: [
            'red'
        ]
      },
      {
        label: "Reprobados",
        data: [18, 1, 5, 9],
        borderWidth: 2,
        backgroundColor: [
            'green'
        ]
      },
      {
        label: "Egresados",
        data: [1, 2, 3, 4],
        borderWidth: 2,
        backgroundColor: [
            'black'
        ]
      }
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const btn = document.getElementById("btn");
let valores = [];
let usuarios = [];
let i = 1;
btn.addEventListener("click",() =>{
    valores.push(i);
    usuarios.push({
      nombre:"marco",
      edad: 15,
      sexo : 'H'
    });
    i++;
    alert(valores.length);
}); 