var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	
	eleccionMaquina = Math.floor((Math.random () * (4 - 1)) + 1);
    console.log (eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(eleccionMaquina)
    {
		case 1:
			ContadorDeEmpates++
            mensaje="Empató";
            break;
		case 2:
			ContadorDePerdidas++
            mensaje="Perdió";
            break;
		case 3:
			ContadorDeGanadas++
            mensaje="Ganó";
            break;
    }
	
	alert(mensaje);
	document.getElementById("ganadas").value=ContadorDeGanadas;
	document.getElementById("perdidas").value=ContadorDePerdidas;
	document.getElementById("empatadas").value=ContadorDeEmpates;

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(eleccionMaquina)
    {
		case 1:
			ContadorDeGanadas++
            mensaje="Ganó";
            break;
		case 2:
			ContadorDeEmpates++
            mensaje="Empató";
            break;
		case 3:
			ContadorDePerdidas++
            mensaje="Perdió";
            break;
    }
	
	alert(mensaje);
	document.getElementById("ganadas").value=ContadorDeGanadas;
	document.getElementById("perdidas").value=ContadorDePerdidas;
	document.getElementById("empatadas").value=ContadorDeEmpates;

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(eleccionMaquina)
    {
		case 1:
			ContadorDePerdidas++
            mensaje="Perdió";
            break;
		case 2:
			ContadorDeGanadas++
            mensaje="Ganó";
            break;
		case 3:
			ContadorDeEmpates++
            mensaje="Empató";
            break;
    }
	
	alert(mensaje);
	document.getElementById("ganadas").value=ContadorDeGanadas;
	document.getElementById("perdidas").value=ContadorDePerdidas;
	document.getElementById("empatadas").value=ContadorDeEmpates;

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}