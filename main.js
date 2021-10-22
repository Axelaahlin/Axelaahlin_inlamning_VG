let fråga1 = document.querySelectorAll("[name='1']");
let svar1 = "";
let fråga2 = document.querySelectorAll("[name='2']");
let svar2 = "";
let fråga3 = document.querySelectorAll("[name='3']");
let svar3= "";
let fråga4 = document.querySelectorAll("[name='4']");
let svar4 = "";
let fråga5 = document.querySelectorAll("[name='5']");
let svar5 = "";
let fråga6 = document.querySelectorAll("[name='6']");
let svar6 = "";
let fråga7 = document.querySelectorAll("[name='7']");
let svar7 = "";
let fråga8 = document.querySelectorAll("[name='8']");
let svar8 = "";
let fråga9 = document.querySelectorAll("[name='9']");
let svar9 = "";
let fråga10 = document.querySelectorAll("[name='10']");
let svar10 = "";

let resultat = 0;

let rätta = document.querySelector("#rätta")

rätta.addEventListener("click", () => {
  fråga1.forEach(svar => {
    if (svar.checked){
      svar1=svar.value; 
      if (svar1 === "Skånela IF"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga2.forEach(svar => {
    if (svar.checked){
      svar2=svar.value; 
      if (svar2 === "Bålsta IF"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga3.forEach(svar => {
    if (svar.checked){
      svar3=svar.value; 
      if (svar3 === "16 år"){
        resultat =+ 1;
        console.log(resultat)
      }
    }
  })
  fråga4.forEach(svar => {
    if (svar.checked){
      svar4=svar.value; 
      if (svar4 === "Skånela IF"){
        resultat =+ 1;
        console.log(resultat)
      }
    }
  })
})
