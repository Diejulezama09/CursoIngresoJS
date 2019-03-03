function mostrar()
{
	//declarar contadores y variables 
	
	var numero;
	var contadorNegativos=0
	var contadorCeros=0;
	var contadorPositivos=0;
	var negativos=0;
	var positivos=0;
	var contadorPares=0;
	var promedioNeg;
	var promedioPost;
	var diferencia;
	var respuesta="si";

	while (respuesta!="no")
	{
		numero = prompt ("Ingrese un numero");
		while (isNaN (numero)==true)
		{
			numero = prompt ("Error. Ingrese un numero");
		}
		numero= parseInt (numero);

		if (numero!=0)
		{
			if (numero>0)
			{
				contadorPositivos++;
				positivos=positivos+numero;
			}
			else
			{
				contadorNegativos++;
				negativos=negativos+numero;
			}
		}
		else
		{
			contadorCeros++;
		}


		if (numero%2==0)
		{
			contadorPares++;
		}

		respuesta= prompt ("Desea continuar?");
	}

	promedioPost=positivos/contadorPositivos;
	promedioNeg=negativos/contadorNegativos;
	diferencia=positivos - negativos;

		document.write ("Se ingresaron " + contadorPositivos + " numeros positivos. La suma de los mismos es " + positivos + " y su promedio: " + promedioPost + ". Se ingresaron " + contadorNegativos + " numeros negativos. La suma de los mismos es "
	 + negativos + " y su promedio " + promedioNeg + ". Hay " + contadorPares + " numeros pares, y " + contadorCeros + " ceros ingresados. La diferencia entre positivos y negativos es de " + diferencia);

}//FIN DE LA FUNCIÓN