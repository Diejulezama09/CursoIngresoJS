/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
  do {
      edad=prompt("ingrese edad")
  } while (edad < 18 || edad > 90);

  do {
      sexo=prompt("Ingrese m para Masculino o f para Femenino:")     
  } while (sexo !="m" && sexo !="f");

  do {
      estadoCivil=prompt("Ingrese 1 si es soltero/a. Ingrese 2 si es casado/a. Ingrese 3 si es divorciado/a. Ingrese 4 si es viudo/a:")
  } while (estadoCivil < 1 || estadoCivil > 4);

  do {
      sueldoBruto=prompt("Ingrese sueldo bruto");
  } while (sueldoBruto < 8000);

  do {
      legajo=prompt("Ingrese numero de legajo:")
  } while (legajo < 1000 || legajo > 9999);

  do {
      nacionalidad=prompt("Ingrese A para argentinos, E para exranjeros y N para nacionalizados:")
  } while (nacionalidad !="A" && nacionalidad !="E" && nacionalidad !="N");

  document.getElementById("Edad").value=edad;
  document.getElementById("Sexo").value=sexo;
  document.getElementById("EstadoCivil").value=estadoCivil;
  document.getElementById("Sueldo").value=sueldoBruto;
  document.getElementById("Legajo").value=legajo;
  document.getElementById("Nacionalidad").value=nacionalidad




}
