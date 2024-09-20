let listaNombresGastos = [];
let listaValoresGastos = [];

//esta función se invoca cuando el usuario hace click en el 
//boton 
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos); 
    console.log(listaValoresGastos);

    //alert('Click de usuario');
    actualizarListaGastos();
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion)=>{
        const valorGasto = listaValoresGastos[posicion];

       htmlLista += `<li>${elemento} - CLP${valorGasto} 
       <button onclick="eliminarGasto(${posicion});">Eliminar</button>
       
       </li>`; 

       //calculamos el total de gastos
       totalGastos += Number(valorGasto);

       console.log(totalGastos)
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos;
    limpiar();
    console.log(htmlLista);
}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();

}