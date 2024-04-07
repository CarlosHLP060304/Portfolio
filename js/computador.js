let dataEHoraAtual = new Date()
let mesEscrito = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
let diaSemana = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]
let minutos_iniciais =  ["00","01","02","03","04","05","06","07","08","09"]
let minutos =  minutos_iniciais.includes("0"+dataEHoraAtual.getMinutes().toString()) ? minutos_iniciais[dataEHoraAtual.getMinutes()] : dataEHoraAtual.getMinutes() 
console.log(minutos)
document.body.innerHTML = `
<div class="data_horario text-light">   
<div class = "horario">
      ${dataEHoraAtual.getHours()} : ${minutos}   
</div>
<div class = "data">
      ${diaSemana[dataEHoraAtual.getDay()]},${dataEHoraAtual.getDate()} de ${mesEscrito[dataEHoraAtual.getMonth()]}
</div>
</div>

`
document.body.addEventListener("click",()=>{
    document.body.classList.add("fundo-opaco")
    document.body.innerHTML = `
    <div class="login text-light">
    <img src="./img/carlos.jpeg"
    alt="imagem Carlos Henrique Lins Ponchirolli"
    class="principal_sobre_mim_imagem_Carlos">
    <p style="font-size:5rem">Carlos Henrique Lins Ponchirolli</p>
    <button class="btn btn-secondary">Entrar no portfólio</button>
    </div>
    `
    document.querySelector("button").addEventListener("click",()=>{
      new Audio("./audio/Alarm03.wav").play()
      window.open("../pages/paginaLogado.html")
})

})

