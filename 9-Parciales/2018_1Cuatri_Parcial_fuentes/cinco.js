function mostrar()
{
  var planeta;
  var mensaje;
  planeta=prompt("ingrese planeta.");

  switch (planeta) {

        case "mercurio":
        case "venus":
              alert ("Acà hace mas calor.");
              break;
        case "tierra":
              alert ("Acà vivimos.");
              break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
              alert ("Acà hace mas frio.");
              break;
        default :
              alert ("Ingrese un planeta vàlido.");
              
  }
}
