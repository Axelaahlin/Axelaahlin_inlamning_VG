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
let knappContainer = document.querySelector("#container")
let svar = document.querySelector("#svar")

let rätta = document.querySelector("#rätta")
let om = document.querySelector("#nytt")

rätta.addEventListener("click", () => {
  fråga1.forEach(svar => {
    if (svar.checked){
      svar1 = svar.value; 
      if (svar1 === "Skånela IF"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga2.forEach(svar => {
    if (svar.checked){
      svar2 = svar.value; 
      if (svar2 === "Bålsta IF"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga3.forEach(svar => {
    if (svar.checked){
      svar3 = svar.value; 
      if (svar3 === "16 år"){
        resultat++;
        console.log(resultat)
      }
    }
  })

  let rättSvar1 = document.querySelector("#hallby")
  let rättSvar2 = document.querySelector("#rimbo")
  let rättaSvar = [];

  fråga4.forEach(svar => {
    if (svar.checked){
      rättaSvar.push(svar.value);
    }
  })
  if (rättaSvar.length === 3){
    alert("Du har kryssade tyvärr i för många alternativ på fråga 4.")
    rätta.remove();
  } else if (rättSvar1.checked && rättSvar2.checked){
    resultat++;
    console.log(resultat)
  }

  fråga5.forEach(svar => {
    if (svar.checked){
      svar5 = svar.value; 
      if (svar5 === "En medalj"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga6.forEach(svar => {
    if (svar.checked){
      svar6 = svar.value; 
      if (svar6 === "Två gånger"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga7.forEach(svar => {
    if (svar.checked){
      svar7 = svar.value; 
      if (svar7 === "Hammarby IF HF"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga8.forEach(svar => {
    if (svar.checked){
      svar8 = svar.value; 
      if (svar8 === "Tre säsonger"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga9.forEach(svar => {
    if (svar.checked){
      svar9 = svar.value; 
      if (svar9 === "Fem år"){
        resultat++;
        console.log(resultat)
      }
    }
  })
  fråga10.forEach(svar => {
    if (svar.checked){
      svar10 = svar.value; 
      if (svar10 === "All-star team JSM"){
        resultat++;
        console.log(resultat)
      }
    }
  })

  if (resultat <= 5){
    svar.innerText = "Du fick " + resultat + "/10 rätt. Tryck på RESTART, om du vill göra det igen! ";
  } else if (resultat > 5 && resultat <= 7 ){
    svar.innerText = "Du fick " + resultat + "/10 rätt. Du klarade det nästan.";
    svar.style.color = "orange"
  } else {
    svar.innerText = "Du fick " + resultat + "/10 rätt. Grattis du klarade quizet. ";
    svar.style.color = "Green"
  }
  if (resultat === 11){
    rätta.remove();
    alert("Nu försöker du göra någonting du inte får! Tryck på RESTART om du vill göra om det.")
    svar.innerText = ""
  }
  rätta.remove();
})

om.addEventListener("click", () => {
  location.reload();
}); 




let mode = document.querySelector("#mode");
let body = document.querySelector("body")
let modet = 0




mode.addEventListener("click", () => {
  modet++;
if ((modet%2) == 1){
body.style.background = "Black"
body.style.color = "White"
} else {
body.style.background = "white"
body.style.color = "Black"
}
});

