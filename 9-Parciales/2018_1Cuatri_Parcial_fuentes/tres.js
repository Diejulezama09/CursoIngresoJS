function mostrar()
{
var precio;
var descuento;
var valorDes;
precio = prompt ("Precio");
descuento = prompt ("Descuento");
valorDes = 1 - (parseInt (descuento)/100);
document.getElementById("elPrecioFinal").value = precio * valorDes;
}
