function mostrarTotal(montoTotal){
    console.log("El total a pagar con IVA incluido es: $"+ montoTotal)
}

function calcularPrecioconIVA(precioBase, callbackMostrar){
    var iva = precioBase * 0.16;
    var total = precioBase + iva;
}

callbackMostrar(total);
calcularPrecioconIVA(100, mostrarTotal());