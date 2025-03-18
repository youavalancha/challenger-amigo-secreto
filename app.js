
let amigo = [];

function agregarAmigo(){
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){
        alert('Debe ingresar un nombre');
        return;

    }else{
        if(!validarLetras(nombreAmigo)){
            alert('debe ingresar solo letras no numeros');
            return;
        }
    }
    nombreAmigo = cambiaAMayusculas(nombreAmigo);
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarAmigo();

    
}

function mostrarAmigo(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);

    }

}



function sortearAmigo(){
    if(amigo.length === 0){
        alert("ningun amigo para sortear");
        return;
    }
    let amigoSorteado = amigo [Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es : ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";


}
function validarLetras(texto) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    return regex.test(texto);
}

function cambiaAMayusculas(str){
    
    if(str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
