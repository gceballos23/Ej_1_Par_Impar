let btnSend = document.getElementById("send");

btnSend.addEventListener("click", () => {
  let numero: number = Number(data.value);
  if (numero % 2 > 0) {
    console.log("Numero Impar");
  } else {
    console.log("Numero Par");
  }
});
