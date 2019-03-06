function mostrar()
{
    var nota;
	var sexo;
	var bandera=true;
	var notaBaja;
	var sexoNotaBaja;
	var acumulador=0;
	var promedio;
	var contador=0;
	var contadorVarones=0;
	
	while (contador<5) 
	{
		contador++;

		do
		{
			nota= prompt ("Ingrese una nota del 1 al 10");
			nota=parseInt (nota);
		}while (isNaN(nota)==true || nota<1 || nota>10);

		do
		{
			sexo= prompt ("Ingrese el sexo");
		}while (isNaN (nota)==false || sexo != "f" && sexo!="m");

		if (bandera)
		{
			notaBaja=nota;
			sexoNotaBaja=sexo;
			bandera=false;
		}
		else 
		{
			if (nota<notaBaja)
			{
				notaBaja=nota;
				sexoNotaBaja=sexo;
			}
		}

		acumulador=acumulador+nota;

		if (sexo=="m" && nota>5)
		{
			contadorVarones++;
		}
	}

	promedio=acumulador/contador;
	alert ("Promedio total " + promedio + ". La nota mas baja es un " + notaBaja + " y corresponde a un " + sexoNotaBaja + ". Hay " + contadorVarones + " varones con nota mayor o igual a 6.");
}
