let dataEHoraAtual = new Date()
let mesEscrito = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
let diaSemana = ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]
let horas_minutos_iniciais =  ["00","01","02","03","04","05","06","07","08","09"]
let minutos =  horas_minutos_iniciais.includes("0"+dataEHoraAtual.getMinutes().toString()) ? horas_minutos_iniciais[dataEHoraAtual.getMinutes()] : dataEHoraAtual.getMinutes() 
let horas =  horas_minutos_iniciais.includes("0"+dataEHoraAtual.getHours().toString()) ? horas_minutos_iniciais[dataEHoraAtual.getHours()] : dataEHoraAtual.getHours() 
let segundos_restantes = 60000-dataEHoraAtual.getSeconds()*1000

document.body.innerHTML = `
<div class="data_horario text-light">   
<div class = "horario">
      ${horas} : ${minutos}   
</div>
<div class = "data">
      ${diaSemana[dataEHoraAtual.getDay()]},${dataEHoraAtual.getDate()} de ${mesEscrito[dataEHoraAtual.getMonth()]}
</div>
</div>

`

setInterval(()=>{window.location.href="../index.html"},segundos_restantes)

let contador = 0


for (const evento in document) {
      if(evento.startsWith("on")){
            let evento_sem_on = evento.split("on")[1]
            if(evento_sem_on === "click" || evento_sem_on === "keyup"){
                  document.body.addEventListener(evento_sem_on,()=>{
                        if(contador!=1){
                            document.body.classList.add("fundo-opaco")
                            document.body.innerHTML = `
                            <div class="login text-light">
                            <img src="./img/carlos.jpeg"
                            alt="imagem Carlos Henrique Lins Ponchirolli"
                            class="principal_sobre_mim_imagem_Carlos">
                            <p style="font-size:5rem">Carlos Henrique Lins Ponchirolli</p>
                            <input type="text" class="mb-4 p-3" style="font-size:2rem" placeholder="Digite seu nome " id="nome">
                            <button class="btn btn-primary botao">Ir para a página principal</button>
                            </div>
                            `
                            document.querySelector("button").addEventListener("click",()=>{
                              localStorage.setItem("nome",document.querySelector("#nome").value)
                              window.location.href = "../pages/loading.html"})
                      }
                      contador = 1
                  })
            } 
      }}


