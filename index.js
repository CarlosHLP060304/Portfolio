const tecnologias = document.querySelector("#tecnologias")
const projetos = document.querySelector("#projetos") 
const navegacao_cabecalho= document.querySelector("#cabecalho-navegacao");
const cabecalho = document.querySelector("#cabecalho");
let tecnologias_json =  []
let projetos_json = []

document.addEventListener('scroll',ativaBackgroundCabecalho);
function ativaBackgroundCabecalho(){
    if(scrollY == 0){
        cabecalho.classList.remove("cabecalho-scroll");
    }else{
        cabecalho.classList.add("cabecalho-scroll");
    }
}


document.getElementById("menu-sanduiche").addEventListener('click',function(e){
    navegacao_cabecalho.classList.toggle("navegacao-desativada");
    console.log("acionou");
});



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






let src = [
        "./img/html5.jpg",
        "./img/css3.jpg",
        "./img/javascript.png",
        "./img/bootstrap.png",
        "./img/java.png",
        "./img/spring.jpg",
        "./img/sql.jpg",
        "./img/kotlin.jpg",
        "./img/dart.jpg",
        "./img/flutter.jpg",
        "./img/git.png",
        "./img/github.jpeg"
]


let alt= [  
        "logo html5",
        "logo css3",
        "logo javascript",
        "logo bootstrap",
        "logo java",
        "logo spring",
        "logo sql",
        "logo kotlin",
        "logo dart",
        "logo flutter",
        "logo git",
        "logo github"
]
let descricoes =  [
        "Linguagem de marcação usada para criar e estruturar conteúdo na web, usando elementos e tags para definir a organização e apresentação de texto, imagens, links e outros elementos em páginas da internet.",
        "Linguagem usada para estilizar e formatar documentos HTML, permitindo controlar o design, layout e aparência visual de elementos web, como cores, fontes, espaçamentos e posicionamentos.",
        "Linguagem de programação versátil e amplamente usada na web, permitindo a criação de interatividade, funcionalidades dinâmicas e manipulação de elementos em páginas web, além de ser executada tanto no navegador quanto em servidores.",
        "Framework front-end de código aberto que simplifica o desenvolvimento web, oferecendo um conjunto de componentes, estilos predefinidos e recursos responsivos para criar rapidamente interfaces modernas e bem projetadas.",
        "Linguagem de programação versátil, orientada a objetos e amplamente utilizada, conhecida por sua portabilidade, segurança e grande comunidade de desenvolvedores. É usado em uma variedade de aplicações, desde software de desktop até aplicativos móveis e sistemas de servido",
        "O Spring é um framework de aplicativo Java de código aberto e de propósito geral, criado para facilitar o desenvolvimento de aplicativos corporativos robustos e escaláveis. Ele fornece um ambiente abrangente e modular para o desenvolvimento de aplicativos Java, com suporte para diversas tecnologias e padrões, como injeção de dependência, controle transacional, acesso a dados, segurança, desenvolvimento de APIs RESTful e muito mais.",
        "Linguagem de de consulta estruturada usada para gerenciar e manipular bancos de dados relacionais. Ela permite a criação, recuperação, inserção, atualização e exclusão de dados de maneira eficiente e organizada.",        
        "Kotlin é uma linguagem de programação moderna, concisa e segura, desenvolvida pela JetBrains, que se destaca como a linguagem preferencial para o desenvolvimento de aplicativos Android. Com sintaxe limpa e expressiva, Kotlin oferece recursos poderosos, como nulidade segura e interoperabilidade perfeita com código Java, permitindo aos desenvolvedores escrever aplicativos Android robustos e eficientes.",
        "Dart é a linguagem de programação padrão para o desenvolvimento de aplicativos Flutter, o que permite aos desenvolvedores criar interfaces de usuário ricas e responsivas para uma ampla variedade de plataformas a partir de um único código-fonte.",
        "Flutter é um kit de desenvolvimento de software de interface de usuário (UI) de código aberto criado pela Google, utilizado para construir aplicativos compilados nativamente tanto para dispositivos Android quanto iOS, além de ser compatível com web e desktop, tudo a partir de um único código-fonte em Dart.",
        "O Git é uma ferramenta que registra e acompanha as mudanças feitas em projetos de software. Ele permite voltar a versões anteriores, ajuda equipes a trabalhar juntas sem problemas e mantém um histórico claro de todas as alterações, o que é essencial para o desenvolvimento de software colaborativo.",
        "O GitHub é um site para guardar projetos de software usando o Git. Permite colaboração em equipe, facilita o trabalho simultâneo, revisão de código e o registro das mudanças feitas ao longo do tempo. É uma plataforma central para desenvolvedores compartilharem e gerenciarem seus projetos de maneira eficiente."
    ]

let videos = [
    "videos/agendamento_medico.mp4",
    "videos/buscador_cep_java.mp4",
    "videos/competicao_equipes.mp4",
    "videos/gerador_senha.mp4",
    "videos/simulacao_atendimento_feedback.mp4",
    "videos/sistema_ong.mp4"
]

let titulos = [
    "Agendamento de Consultas",
    "Buscador CEP",
    "Sistema Competição entre Equipes",
    "Gerador de Senha",
    "Simulacao Atendimento Feedback",
    "Sistema ONG Alimentando Esperanças"
]

for (let index = 0; index < src.length; index++) {
        adicionarTecnologia(index,src[index],alt[index],descricoes[index])
}

for (let index = 0; index < videos.length; index++) {
    adicionarProjeto(index,titulos[index],videos[index])
}


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




projetos.innerHTML += `

    ${
        projetos_json.map(
            projeto => `
            <div class="projeto col-6">
                <h3 class="text-light">${projeto.titulo}</h3>
                <video src="${projeto.video}" controls class="video-projeto" poster="./img/capa_video.jpg"></video>
            </div>
            `
        ).join("")
    }
        
    
    `


ativaBackgroundCabecalho();


