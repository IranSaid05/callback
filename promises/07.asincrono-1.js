
function solicitarClima(ciudad) {
    return new Promise(function(resolve, reject) {
        console.log("Solicitando pronóstico del clima para " + ciudad + "...");

        setTimeout(function() {
            if (ciudad === '') {
                reject('Debes especificar el nombre de una ciudad válida');
            } else {
                var datosClima = {
                    ciudad: ciudad,
                    temperatura: 21,
                    condicion: 'Soleado'
                };

                resolve(datosClima);
            }
        }, 5000);
    });
}

solicitarClima('Cordoba')
.then(function(reporte) {
    console.log("Clima de " + reporte.ciudad + ": " +
        reporte.temperatura + "°C, " + reporte.condicion);
})
.catch(function(error) {
    console.log(error);
});
console.log("La aplicacion continua ejecutandose mientras llega el reporte...");