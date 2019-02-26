function mostrar()
{
    var numero;
    var cont=0
    numero=parseInt(numero);
    numero=prompt("Ingrese numero:");

 
    for (var i=1; i<=numero; i++) {
 
         if(numero % i == 0) {
         cont++
         if (cont==2) {
            alert ("primo")
            }   else {
             alert("no")
            }

        }

}//FIN DE LA FUNCIÓN