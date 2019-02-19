
function mostrar()
{
    var mascota1;
    var pesoMascota1;
    var mascota2;
    var pesoMascota2;
    var pesoMascotas;

    mascota1=prompt ("Ingrese nombre");
    pesoMascota1=prompt ("Ingrese peso")
    mascota2=prompt ("Ingrese nombre");
    pesoMascota2=prompt ("Ingrese nombre")
    pesoMascotas=parseInt(pesoMascota1) + parseInt(pesoMascota2);
   

    alert("tenes dos mascotas "+mascota1+" y "+mascota2+", que pesan "+pesoMascota1+" y "+pesoMascota2+" kilos, la suma de los kilos es "+pesoMascotas);
}
