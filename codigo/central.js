//parte js para o modal funcionar logo depois do carregamento da página
$(window).on('load',function(){
  let delayMs = 1500; // delay in milliseconds
  
  setTimeout(function(){
      $('#myModal').modal('show');
  }, delayMs);
});
//funções para alterar a legenda de cada caixa para identificação visual
function entrare() {
  let a = document.getElementById('educacao')
  a.innerText =  '- Educação -'
}
function saire() {
  let a = document.getElementById('educacao')
  a.innerText =  'Educação'
}
function entrari() {
  let b = document.getElementById('investimento')
  b.innerText =  '- Investimento -'
}
function sairi() {
  let b = document.getElementById('investimento')
  b.innerText =  'Investimento'
}
function entrard() {            
  let c = document.getElementById('despeza')
  c.innerText =  '- Despeza -'
}
function saird() {
  let c = document.getElementById('despeza')
  c.innerText =  'Despeza'
}
function entrarl() {
  let d = document.getElementById('lazer')    
  d.innerText =  '- Lazer -'
}
function sairl() {
  let d = document.getElementById('lazer')
  d.innerText =  'Lazer'
}
//letiavel de controle para quantidade de itens da tabela
let controle = 1
//função para gerar e exportar dados
function verificar() {
//geração e impressão de porcentagens na tela
let dadoA = document.getElementById('DADOeducacao')
let dadoB = document.getElementById('DADOinvestimento')
let dadoC = document.getElementById('DADOdespeza')
let dadoD = document.getElementById('DADOlazer')
let geraA = Number(dadoA.value)
let geraB = Number(dadoB.value)
let geraC = Number(dadoC.value)
let geraD = Number(dadoD.value)
let soma = Number(geraA + geraB + geraC + geraD)
let percA = Number((geraA/soma)*100)
let percB = Number((geraB/soma)*100)
let percC = Number((geraC/soma)*100)
let percD = Number((geraD/soma)*100)
percentagemA.innerHTML = Number(`${percA.toFixed(1)}`)+"%"
percentagemB.innerHTML = Number(`${percB.toFixed(1)}`)+"%"
percentagemC.innerHTML = Number(`${percC.toFixed(1)}`)+"%"
percentagemD.innerHTML = Number(`${percD.toFixed(1)}`)+"%"
//geração de nova linha na tabela
//col1 -> despesa + lazer (gastos)
//col2 -> educação + investimento (investimentos)
//colocar cada atualização dos dados com a estrutura repetida, NESSE CASO, deixa mais organizado e não faz diferença no decorrer das mudanças na página 
let col1 = document.getElementById('c1')
let col2 = document.getElementById('c2')
let somaGasto = Number(geraC + geraD)
let somaInvest = Number(geraA + geraB)
//estrutura condicional que delimita a contagem(quantidade) de dados imprimidos na tabela
if(controle<8){
  col1.innerHTML += '<li id="linhaGasto'+controle+'">'+String(somaGasto)+'</li>';
  col2.innerHTML += '<li id="linhaInvest'+controle+'">'+String(somaInvest)+'</li>';
  let linha1 = document.getElementById('linhaGasto'+String(controle))
  let linha2 = document.getElementById('linhaInvest'+String(controle))
  //condicionais que avaliam a porcentagem dos dados informados
  if(somaGasto>=Number(0.7*soma)){
    //se excede o ideal, é marcado em vermelho
    linha1.style.color = 'red'
  }
  else{
    //se está dentro do ideal, é marcado em preto
    linha1.style.color = 'black'
  }
  if(somaInvest<=Number(0.3*soma)){
    linha2.style.color = 'red'
  }
  else{
    linha2.style.color = 'black'
  }
}
//quando é contada a oitava linha...
else if(controle == 8) { 
  //...a tabela é resetada pegando os elementos HTML originais e armazenando em uma nova variável...
  let tabela1 = document.getElementById('c1');
  let tabela2 = document.getElementById('c2');
  tabela1.innerHTML = "";
  tabela2.innerHTML = "";
  //...recomeçando a contagem
  controle = 1;
}
controle++;

/*
NOTA: para "sobrescrever" novos dados no gráfico,
na verdade, ele precisa ser destruído e recontruído
com os novos dados
*/

//comando para destruir o gráfico antecessor
myChart.destroy() 
//acessa-se o vetor que insere os dados no gráfico por meio do objeto "data" e "datasets"
data.datasets[0].data = [geraA, geraB, geraC, geraD]
//cria novo gráfico com novos dados informados
myChart = new Chart(
  document.getElementById('Chart'),
  config
);

/*
NOTA: caso tenha mais de um gráfico no html, é necessário 
mudar o nome das variáveis e dos identificadores dos gráficos no html
nos gráficos conseguintes
*/

//gráfico destruído
myChart2.destroy()
//cada "data2.datasets[i].data.push(...)" gera uma linha diferente no gráfico
data2.datasets[0].data.push(somaInvest)
data2.datasets[1].data.push(somaGasto)
//data2.datasets[2].data.push(mediaHumor)
//data2.datasets[3].data.push(ideal)
//gráfico recriado
myChart2 = new Chart(
  document.getElementById('Chart2'),
  config2
);
}