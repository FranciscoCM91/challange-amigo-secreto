//creación de la lista
let amigos = [];
let amigoSeleccionado = 0;


//función para agregar nombres a la lista y limpiar la caja
function agregarNombres(){
    let inputNombre = document.querySelector('#amigo').value;
    if (inputNombre === ''){
        alert('Por favor ingrese un nombre.')
        }else{
            amigos.push(inputNombre)
        }
    limpiarCaja();
    mostrarLista();    
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function mostrarLista(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''
    for (let i = 0; i < amigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i]
        lista.appendChild(elemento);
    }    
}

function sortearAmigo(){
    if (amigos.length > 0){
        let indiceAletorio = Math.floor(Math.random() * amigos.length);
        let nombreAleatorio = amigos[indiceAletorio];
        let amigoSeleccionado = document.querySelector('#resultado');
        amigoSeleccionado.innerHTML = nombreAleatorio;
    }else{
        alert('No hay lista de nombres')
    }
}
