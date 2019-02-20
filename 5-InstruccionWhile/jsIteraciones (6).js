function mostrar()
{

	var contador=0;
  var suma=0;
  var numero;
  var promedio;


  while (contador<5) {
    contador++;
    numero=prompt ("ingrese numero");
    numero=parseInt(numero);
    suma+=numero;

    while (numero==NaN) {
      numero=prompt ("ingrese numero");
    numero=parseInt(numero);
    }
  }

  promedio=suma / contador;


document.getElementById("suma").value=parseInt(suma);
document.getElementById("promedio").value=suma/5;

}//FIN DE LA FUNCIÓN
