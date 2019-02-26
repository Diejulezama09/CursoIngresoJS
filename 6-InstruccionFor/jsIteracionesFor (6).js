function mostrar()
{
   var numero;
   numero=parseInt(numero);
   numero=prompt("Ingrese numero:");
  
   

    for (var i=1; i<=numero; i++) {

        if(numero % 2 == 0 && numero != 0) {
        i++;
        document.write(i + " / ");
        }    
}


}//FIN DE LA FUNCIÓN