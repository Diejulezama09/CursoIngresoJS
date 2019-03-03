function mostrar()
{

	var contador=0;
	// declarar variables
	
	var maximo;
    var minimo;
    var numero;
    var cantidad = 0;
    var flag = false;

    var respuesta = 'si';

    while (respuesta != 'no') {
        numero = prompt("Ingrese un numero");

        if (flag == false || numero > maximo) {
            maximo = numero;
        }
        if (flag == false || numero < minimo) {
            minimo = numero;
            flag = true;
        }
        cantidad++;
        respuesta = prompt("Desea ingresar otro numero?");
    }

    document.getElementById("maximo").value = maximo;
    document.getElementById("minimo").value = minimo;
	


}//FIN DE LA FUNCIÓN