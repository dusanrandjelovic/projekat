const slanje = document.getElementById("slanje");
const ime = document.getElementById("ime");
const telefon = document.getElementById("telefon");
const email = document.getElementById("email");
const webadresa = document.getElementById("webadresa");
const poruka = document.getElementById("poruka");
let sveValidno = true;

function proveriSve(){

  if(/^[ ]{0,3}[a-zA-Za-žA-Ž]{2,25}(([' -][ ]*[a-zA-Za-žA-Ž]{2,25})?[a-zA-Za-žA-Ž ]*)*$/.test(ime.value) == false){
    sveValidno = false;
    alert("Upišite svoje ime i prezime");
    ime.focus();
  }

  else if (/^[ ]{0,3}0\d{2}\/\d{3}-\d{3,4}[ ]{0,3}$/.test(telefon.value) == false){
    sveValidno = false;
  alert("Unesite u pravilnom formatu svoj broj telefona");
  telefon.focus();
}

else if(/^[ ]{0,3}[a-z0-9]+([._]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}[ ]{0,3}$/.test(email.value) == false){
  sveValidno = false;
alert("Unesite email");
email.focus();
}

else if(/^[ ]{0,3}(https?:\/\/)?(www\.)?[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}[\/]?[ ]{0,3}$/.test(webadresa.value) == false){
  sveValidno = false;
alert("Unesite svoju web adresu");
  webadresa.focus();
}
else if (/^[ ]*[a-zA-Za-žA-Ž]{2,}([ -\/\.,:;'"!?\s0-9a-zA-Za-žA-Ž])*$/.test(poruka.value) == false){
  sveValidno = false;
 alert("Unesite komentar");
poruka.focus();
}



else {
  //alert("Uspesno ste popunili formu");
  sveValidno = true;
}

}

function proveri(event){

  event.preventDefault();
  sveValidno = true;

  proveriSve();


  if (sveValidno){
    slanje.submit();
  }

}

slanje.addEventListener("submit", proveri);


/*const slanje = document.getElementById("slanje");
const ime = document.getElementById("ime");
const telefon = document.getElementById("telefon");
const email = document.getElementById("email");
const webadresa = document.getElementById("webadresa");
const poruka = document.getElementById("poruka");


let sveValidno = true;


function proveriIme(){

  if(/^([a-zA-Za-žA-Ž'-\s])+$/.test(ime.value)){
    ime.classList.add("valid");
  }

  else {
    sveValidno = false;
    ime.classList.remove("valid");
    alert("Unesite pravilno svoje ime.");
  }

}

function proveriTelefon(){
  if (/^0\d{2}\/\d{3}-\d{3,4}$/.test(telefon.value)){
  telefon.classList.add("valid");
}
  else {
    sveValidno = false;
    telefon.classList.remove("valid");
  alert("Unesite u pravilnom formatu svoj broja telefona");
  }
}

function proveriEmail(){
  if (/^[a-z0-9]+([._]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}$/.test(email.value)){
  email.classList.add("valid");
}
  else {
    sveValidno = false;
    email.classList.remove("valid");
    alert("Pravilno unesite svoj email.");
  }

}

function proveriWebadresu() {
  if (/^(https?:\/\/)?(www\.)?[a-z0-9]+[\.-]?[a-z0-9]+\.[a-z]{2,6}[\/]?$/.test(webadresa.value)){
  webadresa.classList.add("valid");
}
  else {
    sveValidno = false;
    webadresa.classList.remove("valid");
    alert("Niste dobro uneli svoju web adresu.");
  }
}


function proveri(event){

  event.preventDefault();
  sveValidno = true;

  proveriIme();
  proveriTelefon();
  proveriEmail();
  proveriWebadresu();

  if (sveValidno){
    slanje.submit();
  }

}

slanje.addEventListener("submit", proveri);*/
