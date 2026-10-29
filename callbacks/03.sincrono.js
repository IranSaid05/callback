function duplicarNumero(numero){
    console.log('Resultado duplicado: '+ numero * 2);
}

function procesarLista(listarNumeros, accionCallback){
    console.log("--- inicio del procesamiento de la lista ---");
    for(var i=0; i < listarNumeros.legth; i++){
        accionCallback(listarNumeros[i]);
    }
    console.log("--- Fin del procesamiento de la lista ---");
}

var listaNumeros = [5, 10, 15, 20, 25, 30, 35, 40];
procesarLista(listaNumeros, duplicarNumero);
console.log("siguiente instruccion del programa");