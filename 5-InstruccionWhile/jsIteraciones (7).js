function mostrar()
{

	var contador=0;
	var suma=0;
  var respuesta="si";

  while (respuesta != "no") {
    contador++
    respuesta=prompt("Indique si o no.");
    numero=prompt ("ingrese numero");
    numero=parseInt(numero);
    suma+=numero;

  }

  promedio=suma / contador;

document.getElementById("suma").value=suma;
document.getElementById("promedio").value=suma/contador;

}//FIN DE LA FUNCIÓN
