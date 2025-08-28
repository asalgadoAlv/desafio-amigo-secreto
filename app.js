// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea un array para almacenar los nombres.
let listaNombresAmigos = [];

//Captura el valor del campo de entrada. 
function agregarAmigo() {
        let nombresUsuario = document.getElementById('amigo').value;
        
        //Validar la entrada.
        if (nombresUsuario == "") {
            alert('Por favor, inserte un nombre.');
        return;
        }
        
        //Actualizar el array de amigos.
        listaNombresAmigos.push(nombresUsuario);
        console.log(listaNombresAmigos);
        
        //limpiar el campo de entrada.
        limpiarCaja();

        //Obtener el elemento de la lista 
        let agregaNombreLista = document.getElementById("listaAmigos");
        //Agrega elementos a la lista <li>.
        agregaNombreLista.innerHTML += `<li>${nombresUsuario}</li>`;

        return;
    }   

    //Recorrer el Array    
function recorreArray() {
        for(let i=0; i<=listaNombresAmigos.length-1; i++){
        //console.log(listaNombresAmigos[i]);
        }
        return;
    }
    
//limpiar el campo de entrada.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    //validar si hay amigos disponibles.
    if(listaNombresAmigos == 0){
        alert("No hay amigos para sortear en la lista.");
    }
    //Generar un indice aleatorio.
    let nombreAleatorio = Math.floor(Math.random()*listaNombresAmigos.length);
    //Obtener el nombre sorteado.
    let amigoSecreto = listaNombresAmigos[nombreAleatorio];
    //console.log(amigoSecreto);
    //Mostrar el resultado.
    let resultadoSorteo = document.getElementById("resultado");
    resultadoSorteo.innerHTML = amigoSecreto;

}
recorreArray();
