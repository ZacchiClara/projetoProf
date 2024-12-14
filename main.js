document.addEventListener(
    //Garante que carrega todo o HTML antes de executar o JS
    "DOMContentLoaded",
    function(){
        //Seleciona o elemento <menu> do HTML pelo nome do elemento
        const menu = document.querySelector("menu");
        //Obtem a distancia em px entre o topo da pagina e o meu menu
        const topo = menu.offsetTop;
        window.addEventListener("scroll",function(){
            const posicaoScroll = document.documentElement.scrollTop ||document.body.scrollTop;

            //Criando uma condicional
            //Se a posiçao do scroll for maior ou igual ao topo da pagina
            if(posicaoScroll >= topo){
                //Fixo o meu menu
                menu.classList.add("fixed");
                //senão 
        }else{
            //remove a propriedade de fixar o menu no topo da pagina
            menu.classList.remove("fixed");

        }
            
        });

    }
);
