function mostrar()
{
    var cantidadDeAmigos;
    var importe;
    var importeFinal;
    var precioPorAmigos;
    importe=document.getElementById("elPrecioFinal").value;
    importe=parseInt(importe);
    cantidadDeAmigos=prompt("ingrese cantidad de amigos");
    cantidadDeAmigos=parseInt(cantidadDeAmigos);
    importeFinal=(importe * 1.1) * 1.21;
    precioPorAmigos=importeFinal / cantidadDeAmigos;

    alert ("El precio final con propina e iva es "+importeFinal+" y cada amigo debe pagar "+precioPorAmigos);

    
}
