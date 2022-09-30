function tabuada(){
    let span = document.querySelectorAll("span");
    let div = document.getElementById("tabuada");

    if(span.length !== 0){
        for(var i=0; i<=10; i++){
           div.removeChild(span[i]);
        }
    }

    let value = document.getElementById("input-value").value;
    for(var i=0; i<=10; i++){
        let resultado = value * i;
        let span = document.createElement("span");
        span.innerHTML = `${value} x ${i} = ${resultado}`;
        //Aonde está o span na cor azul é uma varialve, pode ser alterado o nome da variavel
        div.appendChild(span);
    }
}


