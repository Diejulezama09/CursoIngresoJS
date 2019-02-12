
function mostrar()
{
    var anchoRec;
    var largoRec;
    var perimetroRec;
    largoRec = prompt ("largo");
    anchoRec = prompt ("ancho");
    perimetroRec = (parseInt (anchoRec) + parseInt (largoRec)) * 2;
    alert (perimetroRec);
 
}
