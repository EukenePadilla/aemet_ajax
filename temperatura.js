
    $(document).ready(function () {

        var api_key = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0dWtlcGxheWVyQGdtYWlsLmNvbSIsImp0aSI6Ijg1NjI2YzhiLWMwM2ItNGY1YS04ZjA0LTQ3NThjZDAwY2ZlYyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTU2NTIwMTI3LCJ1c2VySWQiOiI4NTYyNmM4Yi1jMDNiLTRmNWEtOGYwNC00NzU4Y2QwMGNmZWMiLCJyb2xlIjoiIn0.-x_OT9tA2dAhP14YqTp_3PvLGUMXsFIjgaARQW85Yws";
        
          $.getJSON("https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2019-04-21T00:00:00UTC/fechafin/2019-04-22T23:59:59UTC/todasestaciones/?api_key="+api_key,function(respuesta){
            console.log(respuesta);
            // https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2019-04-15T04%3A12%3A13%2B00%3A00/fechafin/2019-04-16T04%3A12%3A13%2B00%3A00/todasestaciones
            // https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2019-04-21T00:00:00UTC/fechafin/2019-04-22T23:59:59UTC/todasestaciones/
            // https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2019-04-21T00:00:00UTC/fechafin/2019-04-22T23:59:59UTC/estacion/1082/


            // $('temperatura > img').attr('src',respuesta.datos);
            // $('temperatura > a').attr('src',respuesta.datos);
    
          });
    
    
        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2019-04-25/fechafin/2019-04-26/todasestaciones",
        //     "method": "GET",
        //     "headers": {
        //         "cache-control": "no-cache"
        //     }
        // }
    
        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });
    
    });