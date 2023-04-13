//definição de categorias
const labels = [
    'Educação',
    'Investimento',
    'Despeza',
    'Lazer',
    ];

var data = {
    labels: labels,
    datasets: [{
        label: 'Dataset',
        data: [25, 25, 25, 25],
        backgroundColor: [
            'rgb(0, 0, 255, 0.6)',
            'rgb(255, 0, 0, 0.6)',
            'rgb(0, 255, 0, 0.6)',
            'rgb(255, 255, 0, 0.6)',
            ],
        borderColor: [
            'rgb(255, 99, 132, 0.2)',
            'rgb(255, 159, 64, 0.2)',
            'rgb(255, 205, 86, 0.2)',
            'rgb(75, 192, 192, 0.2)',
            'rgb(54, 162, 235, 0.2)',
            'rgb(153, 102, 255, 0.2)',
            'rgb(201, 203, 207, 0.2)'
            ],
    borderWidth: 0.2
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('Chart'),
    config
);



//GRAFICO 2 (LINHA)
const labels2 = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", 
"Sexta", "Sábado"];

const data2 = {
  labels: labels2,
  datasets: [{
    label: 'Soma Investimentos',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  },
  {
    label: 'Soma Gastos',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.
  },
  {
    label: 'Média De Humor',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.
  },
  {
    label: 'IDEAL',
    data: [],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.
  }]
};

const config2 = {
    type: 'line',
    data: data2,
  };

var myChart2 = new Chart(
    document.getElementById('Chart2'),
    config2
);