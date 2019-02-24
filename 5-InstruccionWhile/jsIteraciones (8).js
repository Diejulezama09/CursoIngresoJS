function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	var respuesta='si';
	
	while (respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese numero: "));

		if (numero >= 0){
			positivo = positivo + numero
		} else {
			negativo = negativo * numero
		}

		respuesta = prompt("Desea seguir?");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
