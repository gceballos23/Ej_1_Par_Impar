let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let numero: number = Number(data.value);
  switch (numero) { 
    case 0:

      console.log("El nro ingresado es cero");
      break;
    default:  
      if (numero % 2 > 0) {
        console.log("Numero Impar");
      } else {
        console.log("Numero Par");
      
      }
   }    
});
