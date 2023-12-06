function f_ovo(){
fetch("http://localhost:3000/personagem")
    .then(response => {
        return response.json()
    }).then(ovoJson => {

        console.log(ovoJson)  

        document.getElementById("conteudo").innerHTML = " "

        
            document.getElementById("conteudo").innerHTML += 
            "<b>Nome:</b> " + ovoJson[0].nome +
            "<p> <b>Descrição:</b> "+ ovoJson[0].descricao +"<p>"  +
            "<p> <b>❤:</b> "+ ovoJson[0].vida +"<p>" +
            "<p>  " + ovoJson[0].img +"<p>"
            
        
    });

}


function f_cogumelo(){
    fetch("http://localhost:3000/personagem")
    .then(response => {
        return response.json()
    }).then(cogumeloJson => {

        console.log(cogumeloJson)  

        document.getElementById("conteudo").innerHTML = " "

            document.getElementById("conteudo").innerHTML += 
            "<b>Nome:</b> " + cogumeloJson[1].nome +
            "<p> <b>Descrição:</b> "+ cogumeloJson[1].descricao +"<p>"  +
            "<p> <b>❤:</b> "+ cogumeloJson[1].vida +"<p>"+
            "<p>  " + cogumeloJson[1].img +"<p>"
            
  
    });

 }



 function f_coin(){
    fetch("http://localhost:3000/personagem")
    .then(response => {
        return response.json()
    }).then(coinJson => {

        console.log(coinJson)  

        document.getElementById("conteudo").innerHTML = " "

  
            document.getElementById("conteudo").innerHTML += 
            "<b>Nome:</b> " + coinJson[2].nome +
            "<p> <b>Descrição:</b> "+ coinJson[2].descricao +"<p>"  +
            "<p> <b>❤:</b> "+ coinJson[2].vida +"<p>" +
            "<p>  " + coinJson[2].img +"<p>"
            
    });

}



function f_dog(){
    fetch("http://localhost:3000/personagem")
    .then(response => {
        return response.json()
    }).then(dogJson => {

        console.log(dogJson)  

        document.getElementById("conteudo").innerHTML = " "

            document.getElementById("conteudo").innerHTML += 
            "<b>Nome:</b> " + dogJson[3].nome +
            "<p> <b>Descrição:</b> "+ dogJson[3].descricao +"<p>"  +
            "<p> <b>❤:</b> "+ dogJson[3].vida +"<p>" +
            "<p>  " + dogJson[3].img +"<p>"
           
        
    });

}



function f_flor(){
    fetch("http://localhost:3000/personagem")
    .then(response => {
        return response.json()
    }).then(nuvemJson => {

        console.log(nuvemJson)  

        document.getElementById("conteudo").innerHTML = " "

        
            document.getElementById("conteudo").innerHTML += 
            "<b>Nome:</b> " + nuvemJson[4].nome +
            "<p> <b>Descrição:</b> "+ nuvemJson[4].descricao +"<p>"  +
            "<p> <b>❤:</b>  "+ nuvemJson[4].vida +"<p>"+
            "<p>  " + nuvemJson[4].img +"<p>"+"<br>"
            
        
    });
}


function f_caixa(){
    fetch("http://localhost:3000/personagem")
    .then(response => {
        return response.json()
    }).then(caixaJson => {

        console.log(caixaJson)  

        document.getElementById("conteudo").innerHTML = " "

        
            document.getElementById("conteudo").innerHTML += 
            "<b>Nome:</b> " + caixaJson[5].nome +
            "<p> <b>Descrição:</b> "+ caixaJson[5].descricao +"<p>"  +
            "<p> <b>❤:</b>  "+ caixaJson[5].vida +"<p>" +
            "<p>  " + caixaJson[5].img +"<p>"
            
        
    });

}











