import {array_tecnologias,array_videos} from "./jsons.js";

let tecnologias = document.querySelector("#tecnologias")
const projetos = document.querySelector("#projetos") 
const navegacao_cabecalho= document.querySelector("#cabecalho-navegacao");
const cabecalho = document.querySelector("#cabecalho");
let tecnologias_json =  []
let projetos_json = []
const busca = document.querySelector("#busca")
const contato = document.querySelector("#contato")


new Audio("../audio/Alarm03.wav").play()

let nomeUsuario = localStorage.getItem("nome") === "" ? "User 1" : localStorage.getItem("nome")   

alert(`Bem vindo(a) ${nomeUsuario}`)

function ativaBackgroundCabecalho(){
    if(scrollY == 0){
        cabecalho.classList.remove("cabecalho-scroll");
    }else{
        cabecalho.classList.add("cabecalho-scroll");
    }
}

function adicionarTecnologia(id,src,alt,paragrafo){
    tecnologias_json.push({
        id,src,alt,paragrafo
    })
}

function adicionarProjeto(id,titulo,video){
    projetos_json.push({
        id,titulo,video
    })
}

function exibeTecnologias(){
        
    tecnologias.innerHTML = `
    
    ${
    tecnologias_json.map(
        tecnologia =>  
        `
        <div class="tecnologia col-3 d-flex flex-column me-1 mb-2">
            <button class="btn btn-success">Ver mais</button>
            <img src="${tecnologia.src}" alt="${tecnologia.alt}" class="img-fluid imagem-tecnologias"></img>
            <div class="conteudo d-none">
                <p>${tecnologia.paragrafo}</p>
            </div>
        </div>` 
    ).join("")
    }
`
}

function exibeProjetos(){
        projetos.innerHTML = `
        

        ${
            projetos_json.map(
                projeto => `
                <div class="projeto col-6">
                <iframe style="height:70%;width:50%" src=${projeto.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                `
            ).join("")
        }
        `
    
}


function buscarTecnologia() {
        busca.addEventListener(
            "keyup", ()=>{
                tecnologias.innerHTML = `
        
        
        ${
            tecnologias_json.filter(tecnologia=> tecnologia.alt.split("logo ")[1].toLowerCase().includes(busca.value.toLowerCase())).map(
                tecnologia =>  
                `
                <div class="tecnologia col-3 d-flex flex-column me-1 mb-2">
                    <button class="btn btn-success">Ver mais</button>
                    <img src="${tecnologia.src}" alt="${tecnologia.alt}" class="img-fluid imagem-tecnologias"></img>
                    <div class="conteudo d-none">
                        <p>${tecnologia.paragrafo}</p>
                    </div>
                </div>` 
            ).join("")
            }
        
        `
        exibeDescricao()
            }
    )
}

function exibeDescricao(){
    document.querySelectorAll(".tecnologia").forEach(tecnologia => {
        const button = tecnologia.querySelector("button")
        const sub_div = tecnologia.querySelector(".conteudo")
        button.addEventListener(
            "click", ()=>{
                console.log(sub_div.classList.contains("d-none"))
                if(!sub_div.classList.contains("d-none")){
                    sub_div.classList.add("d-none")
                    button.textContent = "Ver mais" 
                    button.classList.remove("btn-danger")
                    button.classList.add("btn-success")
                    contador = 1
                }else{
                    sub_div.classList.remove("d-none")
                    button.textContent = "Ver menos"
                    button.classList.remove("btn-success")
                    button.classList.add("btn-danger")
                    contador = 0
                }  
               
            }
        )
    });
}

document.addEventListener('scroll',ativaBackgroundCabecalho);


document.getElementById("menu-sanduiche").addEventListener('click',function(e){
    navegacao_cabecalho.classList.toggle("navegacao-desativada");
    console.log("acionou");
});

for (let index = 0; index < array_tecnologias.length; index++) {
        adicionarTecnologia(index,array_tecnologias[index].src,array_tecnologias[index].alt,array_tecnologias[index].paragrafo)
}

for (let index = 0; index < array_videos.length; index++) {
    adicionarProjeto(index,array_videos[index].titulo,array_videos[index].video)
}

// contato.classList.remove("justify-content-start")

// if(){
// }

buscarTecnologia()
ativaBackgroundCabecalho();
exibeTecnologias()
exibeProjetos()
exibeDescricao()





