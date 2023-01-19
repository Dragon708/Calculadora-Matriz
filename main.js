(function () {
    var input = document.getElementById('valueinput');
    var Boton = document.getElementById('botonCalcular')

    Boton.addEventListener('click', Calcular )
     
    
    function Calcular() {
        longitudLadoMatriz = input.value
        
        console.log(longitudLadoMatriz)
    
        var sumaparcialDeReferencia = 1
        
        for (let index = 3; index <= longitudLadoMatriz; index += 2 ) {
            var lllll = sumaparcialDeReferencia
            var valorFinalVuelta = index * index;
               var Diagonal1 = valorFinalVuelta - (index-1)
               var Diagonal2 = Diagonal1 - (index-1)
               var Diagonal3 = Diagonal2 - (index-1)
               const sumaDiagonal = valorFinalVuelta + Diagonal1 +Diagonal2 + Diagonal3 
               sumaparcialDeReferencia = lllll + sumaDiagonal 
        }
        alert(` Resultado: ${sumaparcialDeReferencia}`);
        sumaparcialDeReferencia = 1
    }
}())