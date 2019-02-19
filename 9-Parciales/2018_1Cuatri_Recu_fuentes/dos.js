function mostrar()
{
    var importe;
    var precioConDescuento;
    var precioFinal;
    importe=document.getElementById("elNombre").value;
    importe=parseInt(importe);
    precioConDescuento=importe * 0.9;
    precioFinal=precioConDescuento * 1.21
    document.getElementById("laLocalidad").value=precioFinal;

    
    alert("tu compra es de "+importe+" tenes un descuento del 10% queda en "+precioConDescuento+", mas el iva es "+precioFinal);
}
