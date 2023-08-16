const tecnologias  = document.querySelector("#tecnologias");
const projetos = document.querySelector("#projetos") 
let imagem = null;
let paragrafo = null;
contador = 0;
function criaTecnologia(caminho,conteudo) {
    imagem.src = caminho;
    paragrafo.textContent = conteudo;
}
function criaProjeto(caminho,conteudo) {
    imagem.src = caminho;
    paragrafo.textContent = conteudo;
}

function preencheDivTecnologias() {
    let imagens = [
        "../img/html5.jpg",
        "../img/css3.jpg",
        "../img/javascript.png",
        "../img/bootstrap.png",
        "../img/java.png",
        "../img/sql.jpg",
        "../img/git.png",
        "../img/github.jpeg"
    ];
    let descricoes = [
        "Linguagem de marcação usada para criar e estruturar conteúdo na web, usando elementos e tags para definir a organização e apresentação de texto, imagens, links e outros elementos em páginas da internet.",
        "Linguagem usada para estilizar e formatar documentos HTML, permitindo controlar o design, layout e aparência visual de elementos web, como cores, fontes, espaçamentos e posicionamentos.",
        "Linguagem de programação versátil e amplamente usada na web, permitindo a criação de interatividade, funcionalidades dinâmicas e manipulação de elementos em páginas web, além de ser executada tanto no navegador quanto em servidores.",
        "Framework front-end de código aberto que simplifica o desenvolvimento web, oferecendo um conjunto de componentes, estilos predefinidos e recursos responsivos para criar rapidamente interfaces modernas e bem projetadas.",
        "Linguagem de programação versátil, orientada a objetos e amplamente utilizada, conhecida por sua portabilidade, segurança e grande comunidade de desenvolvedores. É usado em uma variedade de aplicações, desde software de desktop até aplicativos móveis e sistemas de servido",
        "Linguagem de de consulta estruturada usada para gerenciar e manipular bancos de dados relacionais. Ela permite a criação, recuperação, inserção, atualização e exclusão de dados de maneira eficiente e organizada.",
        "O Git é uma ferramenta que registra e acompanha as mudanças feitas em projetos de software. Ele permite voltar a versões anteriores, ajuda equipes a trabalhar juntas sem problemas e mantém um histórico claro de todas as alterações, o que é essencial para o desenvolvimento de software colaborativo.",
        "O GitHub é um site para guardar projetos de software usando o Git. Permite colaboração em equipe, facilita o trabalho simultâneo, revisão de código e o registro das mudanças feitas ao longo do tempo. É uma plataforma central para desenvolvedores compartilharem e gerenciarem seus projetos de maneira eficiente."
    ];
    for(i=0;i<imagens.length;i++){
        imagem = document.createElement("img");
        paragrafo = document.createElement("p");
        div2 = document.createElement("div");
        imagem.classList.add("imagem-tecnologias");
        criaTecnologia(imagens[i],descricoes[i]);
        div2.appendChild(imagem);
        div2.appendChild(paragrafo);
        div2.classList.add("tecnologia")
        if(contador%3 == 0){
            console.log("reiniciou")
            div = document.createElement("div");
            div.classList.add("tecnologias-x");
            contador = 0;
        }
        if(contador%3 != 0 || contador==0){
            console.log("pegou")
            div.appendChild(div2);
        }
        tecnologias.appendChild(div);        
        contador++;
    }
}
function preencheDivProjetos() {
    let imagens = [
        "../img/html5.jpg",
        "../img/css3.jpg",
        "../img/javascript.png",
        "../img/bootstrap.png",
        "../img/java.png",
        "../img/sql.jpg",
        "../img/git.png",
        "../img/github.jpeg"
    ];
    let descricoes = [
        "Linguagem de marcação usada para criar e estruturar conteúdo na web, usando elementos e tags para definir a organização e apresentação de texto, imagens, links e outros elementos em páginas da internet.",
        "Linguagem usada para estilizar e formatar documentos HTML, permitindo controlar o design, layout e aparência visual de elementos web, como cores, fontes, espaçamentos e posicionamentos.",
        "Linguagem de programação versátil e amplamente usada na web, permitindo a criação de interatividade, funcionalidades dinâmicas e manipulação de elementos em páginas web, além de ser executada tanto no navegador quanto em servidores.",
        "Framework front-end de código aberto que simplifica o desenvolvimento web, oferecendo um conjunto de componentes, estilos predefinidos e recursos responsivos para criar rapidamente interfaces modernas e bem projetadas.",
        "Linguagem de programação versátil, orientada a objetos e amplamente utilizada, conhecida por sua portabilidade, segurança e grande comunidade de desenvolvedores. É usado em uma variedade de aplicações, desde software de desktop até aplicativos móveis e sistemas de servido",
        "Linguagem de de consulta estruturada usada para gerenciar e manipular bancos de dados relacionais. Ela permite a criação, recuperação, inserção, atualização e exclusão de dados de maneira eficiente e organizada.",
        "O Git é uma ferramenta que registra e acompanha as mudanças feitas em projetos de software. Ele permite voltar a versões anteriores, ajuda equipes a trabalhar juntas sem problemas e mantém um histórico claro de todas as alterações, o que é essencial para o desenvolvimento de software colaborativo.",
        "O GitHub é um site para guardar projetos de software usando o Git. Permite colaboração em equipe, facilita o trabalho simultâneo, revisão de código e o registro das mudanças feitas ao longo do tempo. É uma plataforma central para desenvolvedores compartilharem e gerenciarem seus projetos de maneira eficiente."
    ];
    for(i=0;i<imagens.length;i++){
        imagem = document.createElement("img");
        paragrafo = document.createElement("p");
        div2 = document.createElement("div");
        imagem.classList.add("imagem-tecnologias");
        criaTecnologia(imagens[i],descricoes[i]);
        div2.appendChild(imagem);
        div2.appendChild(paragrafo);
        div2.classList.add("tecnologia")
        if(contador%3 == 0){
            console.log("reiniciou")
            div = document.createElement("div");
            div.classList.add("tecnologias-x");
            contador = 0;
        }
        if(contador%3 != 0 || contador==0){
            console.log("pegou")
            div.appendChild(div2);
        }
        tecnologias.appendChild(div);        
        contador++;
    }
}

preencheDivTecnologias();
//preencheDivProjetos();