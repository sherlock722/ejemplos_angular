//
function countdown (start){

  //Notificamos el numero al worker
  postMessage (start);

  //Restamos uno al contador
  start -= 1;

  //Esperamos un segundo y llamamos a la funcion de nuevo
  setTimeout(function (){countdown(start)},1000);

}
//Iniciamos la cuenta atras
countdown(10);