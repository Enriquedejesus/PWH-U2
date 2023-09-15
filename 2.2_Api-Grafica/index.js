let contadorGenero = [0, 0];
let totalConsultas = 0;
const data = {
    labels: ["Hombre", "Mujer"],  
    datasets: [{
        label: 'Género',            
        data: contadorGenero,         
        backgroundColor: [          
            'rgba(54, 162, 235, 0.2)',  
            'rgba(255, 99, 132, 0.2)'  
        ],
        borderColor: [              
            'rgb(54, 162, 235)',     
            'rgb(255, 99, 132)'     
        ],
        borderWidth: 1             
    }]
};
const config = {
    type: 'bar',                    
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true     
            }
        }
    },
};

const btnAgregar = document.getElementById("btnAgregar");
const canvas = document.getElementById("chart").getContext("2d"); 
/* Grafica */
let chart = new Chart(canvas, config); 
btnAgregar.addEventListener("click", () => {
    totalConsultas++;
    document.getElementById("numeroGrafica").textContent = `Consultas: ${totalConsultas}`;

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const genero = data.results[0].gender;

            if (genero === "male") {
                contadorGenero[0]++; 
            } else if (genero === "female") {
                contadorGenero[1]++; 
            }
            chart.update(); 
        })
});

